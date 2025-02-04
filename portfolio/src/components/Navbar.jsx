import React from "react";
import { Form, Link } from "react-router-dom";
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
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/works">Works</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li> <Link to="#">Resume</Link></li>
            </ul>
            </section>
          
        </nav>
    );
}

export default Navbar;