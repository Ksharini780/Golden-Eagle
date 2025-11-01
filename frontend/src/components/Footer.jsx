import React from "react";
import "./Footer.css";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        {/* Logo Section */}
        <div className="footer-logo">
          <img src="/logo.png" alt="Golden Eagle Logo" className="footer-logo-img" />
          <div>
            <h2>GOLDEN EAGLE SOLUTIONS</h2>
             <p className="footer-tagline">EXCELLENCE IN EVERY TASK.</p>
          </div>
        </div>

        {/* Links Section */}
        <div className="footer-links">
          <div>
            <h4>Company</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4>Support</h4>
            <ul>
              <li><a href="/faq">FAQ</a></li>
              <li><a href="/feedback">Feedback</a></li>
              <li><a href="/terms">Terms</a></li>
              <li><a href="/privacy">Privacy</a></li>
            </ul>
          </div>

          <div>
            <h4>Connect</h4>
            <ul>
              <li>📍 603 Ang Mo Kio Ave 5</li>
              <li>📞 +65 9123 4557</li>
              <li>✉️ info@goldeneaglecleaning.sg</li>
            </ul>
          </div>
        </div>
      </div>

      <hr className="footer-divider" />

      {/* Social + Bottom Section */}
      <div className="footer-bottom">
        <div className="social-icons">
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaLinkedinIn /></a>
        </div>
        <p>
          © {new Date().getFullYear()} Golden Eagle Cleaning Solution Pte. Ltd. — All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
