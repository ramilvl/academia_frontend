import  { useEffect, useState } from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase/config';

import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Courses from "./pages/Courses";
import About from './pages/About';
import CourseDetail from "./pages/CourseDetail";
import MaterialOptions from './pages/MaterialOptions';
import MaterialRead from './pages/MaterialRead';
import MaterialQuiz from './pages/MaterialQuiz';
import InterviewQuestionsPage from './pages/InterviewQuestionsPage';

function App() {
  const location = useLocation();

  const [user, setUser] = useState<null | object>(null);
  const [loadingAuthState, setLoadingAuthState] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoadingAuthState(false);
    });
    return () => unsubscribe();
  }, []);

  const hideNavbar = location.pathname === '/login' || location.pathname === '/register';

  if (loadingAuthState) {
    return null;
  }

  const isLoginPage = location.pathname === '/login';

  if (!user && !isLoginPage) {
    return <Navigate to="/login" replace />;
  }

  if (user && (location.pathname === '/login' || location.pathname === '/register')) {
    return <Navigate to="/home" replace />;
  }

  return (
    <>
      {!hideNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:courseId" element={<CourseDetail />} />
        <Route path="/course/:courseId/material/:materialId" element={<MaterialOptions />} />
        <Route path="/course/:courseId/material/:materialId/read" element={<MaterialRead />} />
        <Route path="/course/:courseId/material/:materialId/quiz" element={<MaterialQuiz />} />
        <Route path="/about" element={<About />} />
        <Route path="/interview" element={<InterviewQuestionsPage />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </>
  );
}

export default App;
