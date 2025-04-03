import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home';
import StudentDashboard from './components/StudentDashboard';
import Form from './components/Form';
import Confirmation from './components/Confirmation';
import FacultyDashboard from './components/FacultyDashboard';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/student" element={<StudentDashboard />} />
                <Route path="/new-request" element={<Form />} />
                <Route path="/confirmation" element={<Confirmation />} />
                <Route path="/faculty" element={<FacultyDashboard />} />
            </Routes>
        </Router>
    );
}

export default App;