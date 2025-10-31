import React, { useState } from "react";

const ContactUs = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for contacting us! We’ll get back to you shortly.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section className="bg-black text-yellow-400 min-h-screen py-20 px-6">
      {/* ===== Header Section ===== */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-extrabold tracking-wide text-yellow-400 mb-4">
          Contact Us
        </h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Reach out to{" "}
          <span className="text-yellow-400 font-semibold">
            Golden Eagle Cleaning Solution Pte. Ltd.
          </span>{" "}
          for exceptional cleaning and maintenance services across Singapore.
        </p>
      </div>

      {/* ===== Contact Section ===== */}
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
        {/* ===== Left Side: Contact Info + Map ===== */}
        <div className="space-y-10">
          {/* Location */}
          <div>
            <h2 className="text-2xl font-semibold mb-2">📍 Registered Office</h2>
            <p className="text-gray-300 leading-relaxed">
              603 Ang Mo Kio Avenue 5, #01-2683,
              <br />
              Yio Chu Kang Green, Singapore 560603
            </p>
          </div>

          {/* Phone */}
          <div>
            <h2 className="text-2xl font-semibold mb-2">📞 Contact Information</h2>
            <p className="text-gray-300">
              <span className="text-yellow-400 font-semibold">Phone:</span> +65 9123 4567
              <br />
              <span className="text-yellow-400 font-semibold">Email:</span>{" "}
              <a
                href="mailto:info@goldeneaglecleaning.sg"
                className="text-yellow-300 hover:text-yellow-400 underline"
              >
                info@goldeneaglecleaning.sg
              </a>
            </p>
          </div>

          {/* Director */}
          <div>
            <h2 className="text-2xl font-semibold mb-2">🧑‍💼 Director</h2>
            <p className="text-gray-300 font-medium">Syedyusof bin Abdul Majid</p>
          </div>

          {/* Map */}
          <div className="rounded-2xl overflow-hidden border-2 border-yellow-600 shadow-2xl">
            <iframe
              title="Golden Eagle Cleaning Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.703949295771!2d103.84647187496558!3d1.3727526986062366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da16e5ecf2dbf9%3A0x6f2478ad3b4f8f13!2s603%20Ang%20Mo%20Kio%20Ave%205%2C%20Singapore%20560603!5e0!3m2!1sen!2ssg!4v1701685575391!5m2!1sen!2ssg"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* ===== Right Side: Message Form ===== */}
        <div className="bg-neutral-900 rounded-2xl border border-yellow-600 p-8 shadow-2xl">
          <h2 className="text-3xl font-bold text-yellow-400 mb-8 text-center">
            Send Us a Message
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <label className="block text-yellow-300 mb-2 font-medium">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                required
                className="w-full p-3 rounded-lg bg-neutral-800 text-yellow-100 border border-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-yellow-300 mb-2 font-medium">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
                className="w-full p-3 rounded-lg bg-neutral-800 text-yellow-100 border border-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-yellow-300 mb-2 font-medium">
                Message
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Write your message..."
                rows="4"
                required
                className="w-full p-3 rounded-lg bg-neutral-800 text-yellow-100 border border-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              ></textarea>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-yellow-500 to-yellow-300 text-black font-bold py-3 rounded-full shadow-lg hover:from-yellow-400 hover:to-yellow-200 hover:scale-105 transition duration-300"
            >
              ✉️ Send Message
            </button>
          </form>
        </div>
      </div>

      {/* ===== Footer ===== */}
      <footer className="mt-16 text-center text-gray-500 text-sm">
        <p>
          © {new Date().getFullYear()}{" "}
          <span className="text-yellow-400 font-medium">
            Golden Eagle Cleaning Solution Pte. Ltd.
          </span>{" "}
          — All Rights Reserved.
        </p>
      </footer>
    </section>
  );
};

export default ContactUs;
