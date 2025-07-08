import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "../styles/navbar.scss";
import { FiUser, FiSettings } from "react-icons/fi";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isInterviewPage = location.pathname === "/interview";

  const [token, setToken] = useState<string | null>(null);
  const [userName, setUserName] = useState<string>("");

  useEffect(() => {
    const storedToken = localStorage.getItem("accessToken");
    const storedUser = localStorage.getItem("user");
    setToken(storedToken);

    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        setUserName(parsedUser.name || parsedUser.email || "İstifadəçi");
      } catch {
        setUserName("İstifadəçi");
      }
    }
  }, []);

  const toggleDropdown = () => setDropdownOpen((prev) => !prev);

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("user");
    setToken(null);
    setUserName("");
    navigate("/login");
    window.location.reload();
  };

  return (
    <nav className={`navbar-container ${isInterviewPage ? "black-navbar" : ""}`}>
      <div className="navbar">
        <div className="navbar-logo">
          <Link to={token ? "/home" : "/login"}>Academia</Link>
        </div>

        <div className="navbar-links">
          <Link to="/home">Əsas Səhifə</Link>
          <Link to="/recording">Recordings</Link>
          <Link to="/courses">Kurslarım</Link>
          <Link to="/interview">"Interview" Sualları</Link>
        </div>

        <div className="navbar-user">
          {token ? (
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
                  <p>{userName}</p>
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
