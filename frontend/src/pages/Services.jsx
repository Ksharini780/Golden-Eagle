import React from "react";
import "./Services.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Footer from "../components/Footer";

const Services = () => {
  return (
    <>
      <div className="services-page">
        <section className="services-header">
          <h1 className="services-title">Our Services</h1>
          <p className="services-intro">
            At <strong>Golden Eagle Solutions</strong>, we pride ourselves on
            delivering exceptional cleaning and maintenance services tailored to
            meet the highest standards of quality, reliability, and
            professionalism.
          </p>
        </section>

        <section className="carousel-section">
          <Carousel
            showThumbs={false}
            infiniteLoop
            autoPlay
            interval={3000}
            showStatus={false}
            showArrows={true}
            emulateTouch
            stopOnHover
            swipeable
            dynamicHeight={false}
          >
            <div>
              <img src="/industrial-cleaning.png" alt="Industrial Cleaning" />
              <p className="legend">Industrial Cleaning</p>
            </div>
            <div>
              <img src="/commercial-cleaning.jpg" alt="Commercial Cleaning" />
              <p className="legend">Commercial Cleaning</p>
            </div>
            <div>
              <img src="/marine-construction.jpg" alt="Marine Constructions" />
              <p className="legend">Marine & Construction Services</p>
            </div>
            <div>
              <img src="/floor-polishing.jpg" alt="Floor Polishing" />
              <p className="legend">Floor Polishing & Maintenance</p>
            </div>
          </Carousel>
        </section>

        <section className="service-details">
          <div className="service-card">
            <h2>Commercial Cleaning</h2>
            <p>
              Our expert team ensures your workspace remains spotless and
              hygienic, creating a welcoming environment that enhances employee
              productivity and client satisfaction.
            </p>
          </div>

          <div className="service-card">
            <h2>Industrial Cleaning</h2>
            <p>
              We specialize in deep cleaning for industrial sites, using
              advanced equipment and eco-safe methods to maintain safety and
              operational efficiency.
            </p>
          </div>

          <div className="service-card">
            <h2>Marine & Construction Services</h2>
            <p>
              Expert construction and maintenance of piers, docks, harbours, and
              wharves, built with precision and durability to withstand
              demanding marine conditions.
            </p>
          </div>

          <div className="service-card">
            <h2>Floor Polishing & Maintenance</h2>
            <p>
              From marble to vinyl, our floor care services restore shine and
              durability while maintaining a pristine finish for years to come.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default Services;
