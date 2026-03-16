import { Routes, Route } from 'react-router-dom';
import Homepage from './Homepage';
import Experience from './Experience';
import Project from './Project';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/experience" element={<Experience />} />
      <Route path="/project/:projectId" element={<Project />} />
    </Routes>
  );
}
export default App;