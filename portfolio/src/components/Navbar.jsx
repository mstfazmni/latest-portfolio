import React from "react";
import { useLocation, Link } from "react-router-dom";
import "../styles/Navbar.css";
import myLogo from "../assets/mz-f-w.png";

const Navbar = () => {
  const location = useLocation();
  
  // Check if the current path is "works" or "contact"
  const isWhiteText = location.pathname === "/works" || location.pathname === "/contact";

  return (
    <nav className="navbar-container">
      <section className="left-sec">
        <img src={myLogo} alt="LOGO" className="my-logo"></img>
      </section>

      <section className="right-sec">
        <ul className="ul-calss">
          <li><Link to="/" className={isWhiteText ? "white-text" : ""}>Home</Link></li>
          <li><Link to="/about" className={isWhiteText ? "white-text" : ""}>About</Link></li>
          <li><Link to="/works" className={isWhiteText ? "white-text" : ""}>Works</Link></li>
          <li><Link to="/contact" className={isWhiteText ? "white-text" : ""}>Contact</Link></li>
        </ul>
      </section>
    </nav>
  );
};

export default Navbar;
