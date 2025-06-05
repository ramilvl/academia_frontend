import { Routes, Route, useLocation } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Courses from "./pages/Courses";
import About from './pages/About'
import CourseDetail from "./pages/CourseDetail";
import MaterialDetail from './components/Course/MaterialDetail';


function App() {
  const location = useLocation();
  const hideNavbar = location.pathname === '/login' || location.pathname === '/register';

  return (
    <>
      {!hideNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:courseId" element={<CourseDetail />} />
        <Route path="/courses/:courseId/materials/:materialId" element={<MaterialDetail />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
