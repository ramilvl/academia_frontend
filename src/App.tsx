import { useEffect, useState } from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';

import Login from './pages/Login';
import Register from './pages/Register';
import ForgetPassword from './pages/ForgetPassword';

import Home from './pages/Home';
import Courses from './pages/Courses';
import CourseDetail from './pages/CourseDetail';
import MaterialOptions from './pages/MaterialOptions';
import MaterialRead from './pages/MaterialRead';
import MaterialQuiz from './pages/MaterialQuiz';
import InterviewQuestionsPage from './pages/InterviewQuestionsPage';
import Career from './pages/Career';

import ContentSection from './pages/ContentSection';
import RecordingSection from './pages/RecordingSection';
import GradebookSection from './pages/GradebookSection';
import DiscussionSection from './pages/DiscussionSection';

import Navbar from './components/Navbar';
import PrivateRoute from './components/PrivateRoute';

function App() {
  const location = useLocation();
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const storedToken = localStorage.getItem('accessToken');
    setToken(storedToken);
  }, []);

  const publicPages = ['/login', '/register', '/forget-password'];
  const isPublicPage = publicPages.some((page) => location.pathname.startsWith(page));
  const hideNavbar = isPublicPage;

  return (
    <>
      {!hideNavbar && <Navbar />}

      <Routes>
        {/* Public routes */}
        <Route path="/login" element={<Login setToken={setToken} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forget-password" element={<ForgetPassword />} />

        {/* Private routes */}
        <Route path="/home" element={<PrivateRoute token={token}><Home /></PrivateRoute>} />
        <Route path="/courses" element={<PrivateRoute token={token}><Courses /></PrivateRoute>} />
        <Route path="/courses/:courseId/*" element={<PrivateRoute token={token}><CourseDetail /></PrivateRoute>} />
        <Route path="/course/:courseId/material/:materialId" element={<PrivateRoute token={token}><MaterialOptions /></PrivateRoute>} />
        <Route path="/course/:courseId/material/:materialId/read" element={<PrivateRoute token={token}><MaterialRead /></PrivateRoute>} />
        <Route path="/course/:courseId/material/:materialId/quiz" element={<PrivateRoute token={token}><MaterialQuiz /></PrivateRoute>} />
        <Route path="/interview" element={<PrivateRoute token={token}><InterviewQuestionsPage /></PrivateRoute>} />
        <Route path="/career" element={<PrivateRoute token={token}><Career /></PrivateRoute>} />

        {/* 4 sections */}
        <Route path="/content" element={<PrivateRoute token={token}><ContentSection /></PrivateRoute>} />
        <Route path="/recordings" element={<PrivateRoute token={token}><RecordingSection /></PrivateRoute>} />
        <Route path="/gradebook" element={<PrivateRoute token={token}><GradebookSection /></PrivateRoute>} />
        <Route path="/discussions" element={<PrivateRoute token={token}><DiscussionSection /></PrivateRoute>} />

        {/* Default fallback */}
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </>
  );
}

export default App;
