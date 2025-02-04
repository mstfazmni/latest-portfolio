import React from "react";
import { Link } from "react-router-dom";
import '../styles/Navbar.css';
import myLogo from '../assets/mz-f-w.png';

const Navbar = () => {
    
    return(
        <nav className="navbar-container">
            
            <section className="left-sec">
            <img src={myLogo} alt="LOGO" className="my-logo"></img>
            </section>

            <section className="right-sec">
                <ul className="ul-calss">
                <li><Link to="/" smooth={true} duration={500}>Home</Link></li>
                <li><Link to="about" smooth={true} duration={500}>About</Link></li>
                <li><Link to="works" smooth={true} duration={500}>Works</Link></li>
                <li><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
                </ul>
            </section>
          
        </nav>
    );
}

export default Navbar;