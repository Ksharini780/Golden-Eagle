import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

// ✅ Uncomment this if your logo is in src/assets folder
// import logo from "../assets/logo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      {/* Logo Section */}
      <div className="logo-container">
        {/* ✅ If using imported logo change src to {logo} */}
        <img
          src="/logo.png"
          alt="Golden Eagle Solutions official logo"
          className="logo-image"
        />

        <div className="logo-text">
          <h1 className="main-title">GOLDEN EAGLE</h1>
          <p className="sub-title">SOLUTIONS</p>
          <p className="tagline">EXCELLENCE IN EVERY TASK</p>
        </div>
      </div>

      {/* ✅ Hamburger only for <= md devices */}
      <div className="hamburger" onClick={toggleMenu}>
        <span className={menuOpen ? "open" : ""}></span>
        <span className={menuOpen ? "open" : ""}></span>
        <span className={menuOpen ? "open" : ""}></span>
      </div>

      <ul className={`navbar-links ${menuOpen ? "open" : ""}`}>
        <li>
          <Link to="/" onClick={closeMenu}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" onClick={closeMenu}>
            About
          </Link>
        </li>
        <li>
          <Link to="/services" onClick={closeMenu}>
            Services
          </Link>
        </li>
        <li>
          <Link to="/contact" onClick={closeMenu}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
