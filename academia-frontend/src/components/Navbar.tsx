import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { auth } from "../firebase/config";
import '../styles/navbar.scss';

const Navbar = () => {
  const { user } = useAuth();

  return (
    <nav>
      <div className="navbar">
        <div className="logo"><Link to="/">Academia</Link></div>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/courses">Courses</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="user-section">
          {user ? (
            <>
              <span className="user-name">Welcome, {user.displayName || user.email}</span>
              <button onClick={() => auth.signOut()}>Logout</button>
            </>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;