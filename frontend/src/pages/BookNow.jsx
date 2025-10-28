import React, { useState } from "react";
import "./BookNow.css";

function BookNow() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Booking request submitted successfully!");
  };

  return (
    <div className="book-container">
      <h2 className="book-title">Book Your Service</h2>
      <form className="book-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="service"
          placeholder="Service Required"
          value={formData.service}
          onChange={handleChange}
          required
        />
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Additional Message"
          value={formData.message}
          onChange={handleChange}
          rows="4"
        ></textarea>

        <button type="submit">Submit Booking</button>
      </form>
    </div>
  );
}

export default BookNow;
