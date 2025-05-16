import React from "react";
import { useLocation, Link } from "react-router-dom";
import "../styles/Navbar.css";
import myLogo from "../assets/mz-f-w.png";

const Navbar = () => {
  const location = useLocation();

  // Define paths where background is dark
  const darkRoutes = ["/works", "/project/:id"]; 
  const isDark = darkRoutes.some(path => location.pathname.startsWith(path.replace(":id", "")));

  return (
    <nav className={`navbar-container ${isDark ? "navbar-dark" : "navbar-light"}`}>
      <section className="left-sec">
        <img src={myLogo} alt="LOGO" className="my-logo" />
      </section>

      <section className="right-sec">
        <ul className="ul-calss">
          <li><Link to="/" className={isDark ? "white-text" : ""}>Home</Link></li>
          <li><Link to="/about" className={isDark ? "white-text" : ""}>About</Link></li>
          <li><Link to="/works" className={isDark ? "white-text" : ""}>Works</Link></li>
          <li><Link to="/contact" className={isDark ? "white-text" : ""}>Contact</Link></li>
        </ul>
      </section>
    </nav>
  );
};


export default Navbar;
