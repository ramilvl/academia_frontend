import { useEffect, useState } from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';

import Login from './pages/Login';
import Register from './pages/Register';
import ForgetPassword from './pages/ForgetPassword';

import Home from './pages/Home';
import Courses from './pages/Courses';
import About from './pages/RecordingSection';
import CourseDetail from './pages/CourseDetail';
import MaterialOptions from './pages/MaterialOptions';
import MaterialRead from './pages/MaterialRead';
import MaterialQuiz from './pages/MaterialQuiz';
import InterviewQuestionsPage from './pages/InterviewQuestionsPage';

import Navbar from './components/Navbar';
import Career from './pages/Career';

function App() {
    const location = useLocation();

    const [token, setToken] = useState<string | null>(null);

    useEffect(() => {
        const storedToken = localStorage.getItem('accessToken');
        setToken(storedToken);
    }, []);

    const publicPages = ['/login', '/register', '/forget-password'];
    const isPublicPage = publicPages.includes(location.pathname);

    if (!token && !isPublicPage) {
        return <Navigate to="/login" replace />;
    }

    if (token && isPublicPage) {
        return <Navigate to="/home" replace />;
    }

    const hideNavbar = publicPages.includes(location.pathname);

    return (
        <>
            {!hideNavbar && <Navbar />}

            <Routes>
                <Route path="/" element={<Navigate to="/login" replace />} />

                <Route path="/login" element={<Login setToken={setToken} />} />
                <Route path="/register" element={<Register />} />
                <Route path="/forget-password" element={<ForgetPassword />} />

                <Route path="/home" element={<Home />} />
                <Route path="/courses" element={<Courses />} />
                <Route path="/courses/:courseId" element={<CourseDetail />} />
                <Route path="/course/:courseId/material/:materialId" element={<MaterialOptions />} />
                <Route path="/course/:courseId/material/:materialId/read" element={<MaterialRead />} />
                <Route path="/course/:courseId/material/:materialId/quiz" element={<MaterialQuiz />} />
                <Route path="/recording" element={<About />} />
                <Route path="/interview" element={<InterviewQuestionsPage />} />
                <Route path="/career" element={<Career />}/>

                <Route path="*" element={<Navigate to="/login" replace />} />
            </Routes>
        </>
    );
}

export default App;
