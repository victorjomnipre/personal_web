<?php
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

require_once __DIR__ . '/database.php';

$action = $_GET['action'] ?? 'list';

function sendJson($data, $statusCode = 200) {
    http_response_code($statusCode);
    echo json_encode($data);
    exit;
}

function getJsonBody() {
    $input = file_get_contents('php://input');
    $json = json_decode($input, true);
    return (json_last_error() === JSON_ERROR_NONE) ? $json : null;
}

switch ($action) {
    case 'list':
        $stmt = $conn->prepare('SELECT id, name, message, created_at FROM comment ORDER BY created_at DESC LIMIT 100');
        $stmt->execute();
        $result = $stmt->get_result();
        $comments = [];
        while ($row = $result->fetch_assoc()) {
            $comments[] = $row;
        }
        sendJson(['data' => $comments]);
        break;

    case 'create':
        $body = getJsonBody();
        if (!$body) {
            sendJson(['error' => 'Invalid JSON body'], 400);
        }

        // if empty set name to "Anonymous"
        $name = trim($body['name'] ?? '');
        if ($name === '') {
            $name = 'Anonymous';
        }
        
        $message = trim($body['message'] ?? '');

        if ($message === '') {
            sendJson(['error' => 'Message is required'], 400);
        }

        $stmt = $conn->prepare('INSERT INTO comment (name, message) VALUES (?, ?)');
        $stmt->bind_param('ss', $name, $message);
        $stmt->execute();

        if ($stmt->error) {
            sendJson(['error' => $stmt->error], 500);
        }

        sendJson([
            'data' => [
                'id' => $stmt->insert_id,
                'name' => $name,
                'message' => $message,
                'created_at' => date('Y-m-d H:i:s')
            ]
        ], 201);
        break;

    case 'projectlist':
        $stmt = $conn->prepare('SELECT projectID, projectName, description, coverPhoto FROM project ORDER BY projectID ASC');
        $stmt->execute();
        $result = $stmt->get_result();
        $projectList = [];
        while ($row = $result->fetch_assoc()) {
            $projectList[] = $row;
        }
        sendJson(['data' => $projectList]);
        break;

    case 'projectdesc':
        $id = $_GET['id'] ?? null;

        if (!$id) {
            sendJson(['error' => 'Project ID is missing'], 400);
        }
        $projSql = '
            SELECT 
                p.projectID, p.description, p.title, p.problem, p.proposal, p.solution, 
                pi.imagePath 
            FROM project p
            LEFT JOIN projectimage pi ON p.projectID = pi.projectID
            WHERE p.projectID = ?
        ';
        
        $stmt = $conn->prepare($projSql);
        $stmt->bind_param('i', $id);
        $stmt->execute();
        $result = $stmt->get_result();
        $projectDesc = null;
        while ($row = $result->fetch_assoc()) {
            
            if ($projectDesc === null) {
                $projectDesc = [
                    'projectID' => $row['projectID'],
                    'title' => $row['title'],
                    'description' => $row['description'],
                    'problem' => $row['problem'],
                    'proposal' => $row['proposal'],
                    'solution' => $row['solution'],
                    'images' => []
                ];
            }
            if (!empty($row['imagePath'])) {
                $projectDesc['images'][] = $row['imagePath'];
            }
        }
        if (!$projectDesc) {
             sendJson(['error' => 'Project not found'], 404);
        }

        sendJson(['data' => $projectDesc]);
        break;

    default:
        sendJson(['error' => 'Unknown action'], 400);
        break;
}