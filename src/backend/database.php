<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "web_portfolio";
$port = "3306";

// Create connection using MySQLi
$conn = new mysqli($servername, $username, $password, $dbname, $port);

//$conn = new mysqli($host, $user, $pass, $db);
if ($conn->connect_error) {
    header('Content-Type: application/json; charset=utf-8');
    http_response_code(500);
    echo json_encode([
        'error' => 'Database connection failed: ' . $conn->connect_error . ' (Error Code: ' . $conn->connect_errno . ')',
    ]);
    exit;
}

/**
 * Helper function to get the final SQL statement with bound parameters
 * Useful for debugging SQL statements
 * 
 * @param string $sql The SQL statement with placeholders
 * @param string $types The types string (e.g., 'siiiiidddd')
 * @param array $params The array of parameters to bind
 * @return string The final SQL statement with actual values
 */
function getFinalSQL($sql, $types, $params) {
    $finalSQL = $sql;
    
    // Replace each ? with the actual value
    foreach ($params as $param) {
        $pos = strpos($finalSQL, '?');
        if ($pos !== false) {
            // Escape the value properly for display
            if (is_string($param)) {
                $param = "'" . addslashes($param) . "'";
            }
            $finalSQL = substr_replace($finalSQL, $param, $pos, 1);
        }
    }
    
    return $finalSQL;
}