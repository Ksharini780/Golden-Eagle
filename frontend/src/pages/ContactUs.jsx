import React from "react";
import "./ContactUs.css";
import Footer from "../components/Footer";

const ContactUs = () => {
  return (
    <>
      <div className="contact-page">
        <h1 className="contact-title">Get in Touch</h1>
        <p className="contact-description">
          We at <strong className="golden-text">Golden Eagle Solutions </strong>{" "}
          are dedicated to delivered <br></br>exceptional cleaning and
          maintenance services for commercial, industrial,<br></br> and marine
          environments across Singapore Today.
        </p>

        <div className="contact-container">
          {/* Left Section */}
          <div className="contact-info">
            <div className="info-item">
              <h3>📍 Registered Office</h3>
              <p>603 Ang Mo Kio Avenue 5, #01-2683</p>
              <p>Yio Chu Kang Green, Singapore 560603</p>
            </div>

            <div className="info-item">
              <h3>📞 Contact</h3>
              <p>+65 9123 4557</p>
              <p>Mon–Sat: 9:00 AM – 6:00 PM</p>
            </div>

            <div className="info-item">
              <h3>✉️ Email</h3>
              <p>info@goldeneaglecleaning.sg</p>
            </div>
          </div>

          {/* Right Section - Message Form */}
          <div className="contact-form">
            <h3>Contact Us</h3>
            <form>
              <input type="text" placeholder="Full Name" required />
              <input type="email" placeholder="Email" required />
              <textarea placeholder="Message" rows="5" required></textarea>
              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>

        {/* Map Section */}
        <div className="map-section">
          <div className="map-container">
            <iframe
              title="Golden Eagle Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.9874314968946!2d103.8490324747358!3d1.3770875986007838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da171a6c74f77f%3A0x6a3d32d88f85c40!2s603%20Ang%20Mo%20Kio%20Ave%205%2C%20Singapore%20560603!5e0!3m2!1sen!2ssg!4v1709382970208!5m2!1sen!2ssg"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
