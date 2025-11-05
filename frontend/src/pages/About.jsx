import React from "react";
import "./About.css";
import Footer from "../components/Footer";

function About() {
  return (
    <section className="about-container">
      {/* Header Section */}
      <div className="about-header">
        <h1>About Us</h1>
        <p>
          Discover more about <span>Golden Eagle Solutions</span> — our mission,
          story, and the values that define us.
        </p>
      </div>

      {/* Mission Section */}
      <div className="about-section mission">
        <div className="about-text">
          <h2>Our Mission</h2>
          <p>
            At <span>Golden Eagle Solutions </span>, our mission is to deliver
            exceptional cleaning and maintenance services across Singapore. We
            aim to redefine professionalism by combining efficiency,
            consistency, and trust.
          </p>
          <p>
            We’re dedicated to maintaining spotless environments for our clients
            — whether it’s residential, commercial, industrial, or marine
            spaces.
          </p>
        </div>
        <div className="about-image">
          <img src="/about-mission.jpg" alt="Golden Eagle Cleaning Team" />
        </div>
      </div>

      {/* Story Section */}
      <div className="about-section story reverse">
        <div className="about-image">
          <img src="/about-story.jpg" alt="Golden Eagle Story" />
        </div>
        <div className="about-text">
          <h2>Our Story</h2>
          <p>
            Established in Singapore, <span>Golden Eagle Solutions </span> was
            built with a simple vision — to create cleaner, safer, and more
            hygienic spaces for everyone.
          </p>
          <p>
            Over the years, we’ve become a trusted name in professional cleaning
            through our attention to detail, commitment to customer
            satisfaction, and quality service delivery.
          </p>
        </div>
      </div>

      {/* Core Values Section */}
      <div className="core-values">
        <h2>Our Core Values</h2>
        <div className="values-grid">
          <div className="value-card">
            <h3>Excellence</h3>
            <p>
              We go above and beyond to deliver superior cleaning quality every
              time.
            </p>
          </div>
          <div className="value-card">
            <h3>Integrity</h3>
            <p>
              We operate with honesty, transparency, and a commitment to doing
              what’s right.
            </p>
          </div>
          <div className="value-card">
            <h3>Reliability</h3>
            <p>
              You can always count on us to deliver timely, consistent, and
              trusted service.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
