import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="/logo.png" alt="Golden Eagle Logo" className="logo-image" />
        <h1 className="navbar-title">Golden Eagle</h1>
      </div>

      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/addservice">Add Service</Link></li>
        <li><Link to="/book">Book Now</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
