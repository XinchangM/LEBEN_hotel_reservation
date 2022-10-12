import React from "react";
import "../style/navbar.css";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import  {faDice}from "@fortawesome/free-solid-svg-icons";



const Navbar = () => {
    const navigate = useNavigate();
    const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();
    const signUp = () => loginWithRedirect({ screen_hint: "signup" });

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">
          <FontAwesomeIcon  icon= {faDice} />
            leben</span>
          </Link>
        {isAuthenticated ? ( <div className="navItems">
            <button className="navButton" onClick={() => navigate("/profile")}>
              {user.nickname}
            </button>
            <button className="navButton" onClick={() => logout({ returnTo: window.location.origin })}>
              LogOut
            </button>
      </div>)
        : (
          <div className="navItems">
            <button className="navButton" onClick={signUp}>Register</button>
            <button className="navButton" onClick={loginWithRedirect}>Login</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;