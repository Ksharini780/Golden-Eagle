import React, { useState } from "react";
import "./BookNow.css";

const BookNow = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    countryCode: "+65",
    phone: "",
    cleaningSubService: "",
    marineSubService: "",
    message: "",
  });

  const [selectedTop, setSelectedTop] = useState({
    cleaning: false,
    marine: false,
  });

  const cleaningOptions = [
    { value: "office_building", label: "Office & Building Cleaning" },
    { value: "residential", label: "Condominium & Residential Cleaning" },
    { value: "post_renovation", label: "Post-Renovation & Deep Cleaning" },
    { value: "floor_polishing", label: "Floor Polishing" },
    { value: "carpet_cleaning", label: "Carpet Cleaning" },
  ];

  const marineOptions = [
    { value: "piers", label: "Piers" },
    { value: "docks", label: "Docks" },
    { value: "harbours", label: "Harbours" },
    { value: "wharves", label: "Wharves" },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
  };

  const toggleTop = (key) => {
    setSelectedTop((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));

    if (selectedTop[key]) {
      if (key === "cleaning")
        setFormData((p) => ({ ...p, cleaningSubService: "" }));
      if (key === "marine")
        setFormData((p) => ({ ...p, marineSubService: "" }));
    }
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  if (!selectedTop.cleaning && !selectedTop.marine) {
    alert("Please choose at least one service category.");
    return;
  }
  if (selectedTop.cleaning && !formData.cleaningSubService) {
    alert("Please select a Cleaning sub-service.");
    return;
  }
  if (selectedTop.marine && !formData.marineSubService) {
    alert("Please select a Marine & Construction sub-service.");
    return;
  }
  if (!formData.name || !formData.email || !formData.phone) {
    alert("Please fill required fields.");
    return;
  }

  const chosen = [];
  if (selectedTop.cleaning) {
    chosen.push(
      `Cleaning: ${
        cleaningOptions.find((o) => o.value === formData.cleaningSubService)
          ?.label
      }`
    );
  }
  if (selectedTop.marine) {
    chosen.push(
      `Marine & Construction: ${
        marineOptions.find((o) => o.value === formData.marineSubService)
          ?.label
      }`
    );
  }

  const payload = {
    name: formData.name,
    email: formData.email,
    phone: `${formData.countryCode} ${formData.phone}`,
    services: chosen,
    message: formData.message,
  };

  try {
    
    const res = await fetch("http://localhost:5000/api/book/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const data = await res.json();

    if (data.success) {
      alert("Booking submitted successfully! We will contact you soon.");
    } else {
      alert("Something went wrong. Please try again.");
    }
  } catch (error) {
    alert("Server error. Please try again later.");
  }

  setFormData({
    name: "",
    email: "",
    countryCode: "+65",
    phone: "",
    cleaningSubService: "",
    marineSubService: "",
    message: "",
  });
  setSelectedTop({ cleaning: false, marine: false });
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
          <label>Service category:</label>
          <div className="top-toggle-row">
            <button
              type="button"
              className={`top-toggle ${selectedTop.cleaning ? "active" : ""}`}
              onClick={() => toggleTop("cleaning")}
            >
              Cleaning Services
            </button>

            <button
              type="button"
              className={`top-toggle ${selectedTop.marine ? "active" : ""}`}
              onClick={() => toggleTop("marine")}
            >
              Marine & Construction
            </button>
          </div>
        </div>

        {selectedTop.cleaning && (
          <div className="form-group">
            <label>Cleaning - Select service:</label>
            <select
              name="cleaningSubService"
              value={formData.cleaningSubService}
              onChange={handleChange}
              required={selectedTop.cleaning}
            >
              <option value="">Select a cleaning service</option>
              {cleaningOptions.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </div>
        )}

        {selectedTop.marine && (
          <div className="form-group">
            <label>Marine & Construction - Select service:</label>
            <select
              name="marineSubService"
              value={formData.marineSubService}
              onChange={handleChange}
              required={selectedTop.marine}
            >
              <option value="">Select a marine construction service</option>
              {marineOptions.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </div>
        )}

        <div className="form-group">
          <label>Message:</label>
          <textarea
            name="message"
            placeholder="Additional details or requests"
            value={formData.message}
            onChange={handleChange}
            rows="4"
          />
        </div>

        <button type="submit" className="book-btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default BookNow;
