import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return(
        <nav className="navbar-class">
            <ul className="ul-calss">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/works">Works</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;