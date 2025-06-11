import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { auth } from "../firebase/config";
import { FiUser, FiSettings } from "react-icons/fi";
import '../styles/navbar.scss';

const Navbar = () => {
  const { user } = useAuth();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate(); 
  const isInterviewPage = location.pathname === "/interview";

  const toggleDropdown = () => setDropdownOpen((prev) => !prev);

  const handleLogout = async () => {
    await auth.signOut();
    setDropdownOpen(false);
    navigate("/login");
  };

  return (
    <nav className={`navbar-container ${isInterviewPage ? "black-navbar" : ""}`}>
      <div className="navbar">
        <div className="navbar-logo">
          <Link to={user ? "/home" : "/login"}>Academia</Link>
        </div>

        <div className="navbar-links">
          <Link to="/home">Əsas Səhifə</Link>
          <Link to="/about">Recordings</Link>
          <Link to="/courses">Kurslarım</Link>
          <Link to="/interview">"Interview" Sualları</Link>
        </div>

        <div className="navbar-user">
          {user ? (
            <div className="user-dropdown">
              <FiSettings className="extra-icon" size={20} />
              <FiUser
                className="user-icon"
                size={20}
                onClick={toggleDropdown}
                aria-label="User menu"
              />
              {dropdownOpen && (
                <div className="dropdown-menu">
                  <p>{user.displayName || user.email}</p>
                  <button onClick={handleLogout}>Logout</button>
                </div>
              )}
            </div>
          ) : (
            <div className="auth-links">
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
