import React from "react";
import { useLocation, Link } from "react-router-dom";
import "../styles/Navbar.css";
import myLogoBlack from "../assets/mz-f-w.png";
import myLogoWhite from "../assets/mz-f-b.png";


const Navbar = () => {
  const location = useLocation();

  // Logo should be white on these dark background routes
  const logoDarkRoutes = ["/works", "/project", "/contact"];
  const isDarkLogo = logoDarkRoutes.some(path => location.pathname.startsWith(path));

  // Text should be white only on these routes
  const textWhiteRoutes = ["/works", "/project"];
  const isWhiteText = textWhiteRoutes.some(path => location.pathname.startsWith(path));

  return (
    <nav className={`navbar-container ${isWhiteText ? "navbar-dark" : ""}`}>
      <section className="left-sec">
        <img src={isDarkLogo ? myLogoWhite : myLogoBlack} alt="LOGO" className="my-logo" />
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
