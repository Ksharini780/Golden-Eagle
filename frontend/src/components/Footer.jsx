import React from "react";
import "./Footer.css";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

const Footer = () => {
	return (
		<footer className="footer">
			<div className="footer-top">
				<div className="footer-logo">
					<img
						src="/logo.png"
						alt="Golden Eagle Logo"
						className="footer-logo-img"
					/>
					<div>
						<h2>GOLDEN EAGLE SOLUTIONS</h2>
						<p className="footer-tagline">EXCELLENCE IN EVERY TASK</p>
					</div>
				</div>

				<div className="footer-links">
					<div>
						<h4>Company</h4>
						<ul>
							<li>
								<a href="/">Home</a>
							</li>
							<li>
								<a href="/about">About</a>
							</li>
							<li>
								<a href="/services">Services</a>
							</li>
							<li>
								<a href="/contact">Contact</a>
							</li>
						</ul>
					</div>

					<div className="footer-contact">
						<h4>Connect</h4>
						<ul>
							<li>📍 603 Ang Mo Kio Ave 5</li>
							<li>📞 +65 9123 4557</li>
							<li>
								<a href="mailto:info@goldeneagle-solutions.com">
									✉️ info@goldeneagle-solutions.com
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>

			<hr className="footer-divider" />

			<div className="footer-bottom">
				<div className="social-icons">
					<a href="#" aria-label="Facebook">
						<FaFacebookF />
					</a>

					<a
						href="https://www.instagram.com/goldeneagle_solutions/"
						aria-label="Instagram"
						target="_blank"
					>
						<FaInstagram />
					</a>
				</div>
				<p>
					© {new Date().getFullYear()} Golden Eagle Solutions Pte. Ltd. — All
					Rights Reserved.
				</p>
			</div>
		</footer>
	);
};

export default Footer;
