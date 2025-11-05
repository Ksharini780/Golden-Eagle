import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

// ✅ Uncomment this if your logo is in src/assets folder
// import logo from "../assets/logo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="navbar">
      {/* Logo Section */}
      <div className="logo-container">
        <img src="/logo.png" alt="Golden Eagle Logo" className="logo-image" />
        <div className="logo-text">
          <h1 className="main-title">GOLDEN EAGLE</h1>
          <p className="sub-title">SOLUTIONS</p>
          <p className="tagline">EXCELLENCE IN EVERY TASK</p>
        </div>
      </div>

      {/* Hamburger Icon */}
      <div className="menu-icon" onClick={toggleMenu}>
        {menuOpen ? <span className="close">&times;</span> : <span>&#9776;</span>}
      </div>

      {/* Navigation Links */}
      <ul className={`navbar-links ${menuOpen ? "active" : ""}`}>
        <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
        <li><Link to="/about" onClick={toggleMenu}>About</Link></li>
        <li><Link to="/services" onClick={toggleMenu}>Services</Link></li>
        <li><Link to="/contact" onClick={toggleMenu}>Contact</Link></li>
        <li><Link to="/reviews" onClick={toggleMenu}>Reviews</Link></li>
        <li><Link to="/book" onClick={toggleMenu}>Book Now</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
