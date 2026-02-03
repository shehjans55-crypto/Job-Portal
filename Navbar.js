import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles/Navbar.css";

const Navbar = ({ user, onLogout }) => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">Syn<span>Skill</span></Link>
      </div>

      <ul className="nav-links">
        <li><Link to="/jobs">Jobs</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/companies">Companies</Link></li>
<li><Link to="/skill-tests">Skill Tests</Link></li>
      </ul>

      <div className="nav-profile">
        {user ? (
          <div className="profile-wrapper">
            <div
              className="profile"
              onClick={() => setShowMenu(!showMenu)}
            >
              <span className="avatar">
                {user.name.charAt(0)}
              </span>
              <span>{user.name}</span>
            </div>

            {showMenu && (
              <div className="profile-menu">
                <button onClick={onLogout}>Logout</button>
              </div>
            )}
          </div>
        ) : (
          <>
            <Link to="/login" className="login-btn">Login</Link>
            <Link to="/register" className="signup-btn">Sign Up</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
