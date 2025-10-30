import React, { useState } from "react";
import "./BookNow.css";

const BookNow = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    countryCode: "+65",
    phone: "",
    service1: "",
    service2: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.phone 
    ) {
      alert("Please fill in all fields before submitting.");
      return;
    }

    alert(
      `Thank you, ${formData.name}! Your booking for ${formData.service} has been received.`
    );

    setFormData({
      name: "",
      email: "",
      countryCode: "+65",
      phone: "",
      service: "",
    });
  };

  return (
    <div className="booknow-container">
      <h2 className="booknow-title">Book a Service</h2>
      <form className="booknow-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Phone:</label>
          <div className="phone-wrapper">
            <select
              name="countryCode"
              value={formData.countryCode}
              onChange={handleChange}
            >
              <option value="+65">+65</option>
              <option value="+91">+91</option>
              <option value="+1">+1</option>
              <option value="+44">+44</option>
              <option value="+61">+61</option>
            </select>
            <input
              type="tel"
              name="phone"
              placeholder="Enter phone number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label>Cleaning Service Required:</label>
          <select
            name="service1"
            value={formData.service}
            onChange={handleChange}
          >
            <option value="">Select a service</option>
            <option value="Office and Building Cleaning">
              Office and Building Cleaning
            </option>
            <option value="Condominium and Residential Cleaning">
              Condominium and Residential Cleaning
            </option>
            <option value="Post-Renovation and Deep Cleaning">
              Post-Renovation and Deep Cleaning
            </option>
            <option value="Floor Polishing">Floor Polishing</option>
            <option value="Carpet Cleaning">Carpet Cleaning</option>
             <option value="Factories Cleaning">Factories Cleaning</option>
              <option value="Public Areas Cleaning">Public Areas Cleaning</option>
          </select>
        </div>

        
        <div className="form-group">
          <label>Marine Construction Service Required:</label>
          <select
            name="service2"
            value={formData.service}
            onChange={handleChange}
          >
            <option value="">Select a service</option>
            <option value="Harbours">
              Harbours
            </option>
            <option value="Piers">
              Piers
            </option>
            <option value="Docks">
              Docks
            </option>
            <option value="Wharves">Wharves</option>
          </select>
        </div>


        <button type="submit" className="book-btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default BookNow;
