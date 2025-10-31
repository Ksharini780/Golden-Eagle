import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaUserTie } from "react-icons/fa";

const ContactUs = () => {
  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen px-6 md:px-16 py-12 font-poppins">
      {/* ===== Heading ===== */}
      <h1 className="text-5xl font-extrabold text-center text-[#E2B649] mb-6">
        Get in Touch
      </h1>

      <p className="text-center text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
        We at{" "}
        <span className="font-semibold text-[#E2B649]">
          Golden Eagle Cleaning Solution Pte. Ltd.
        </span>{" "}
        are dedicated to delivering exceptional cleaning and maintenance services
        for commercial, industrial, and marine environments across Singapore.
      </p>

      {/* ===== Contact Info + Form ===== */}
      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto items-start">
        {/* Left Column — Contact Info */}
        <div className="space-y-10">
          {/* Address */}
          <div>
            <div className="flex items-center gap-3 mb-2">
              <FaMapMarkerAlt className="text-[#E2B649] text-2xl" />
              <h2 className="text-2xl font-bold text-[#E2B649]">
                Registered Office
              </h2>
            </div>
            <p className="text-gray-300 leading-relaxed">
              603 Ang Mo Kio Avenue 5, #01-2683, <br />
              Yio Chu Kang Green, Singapore 560603
            </p>
          </div>

          {/* Phone */}
          <div>
            <div className="flex items-center gap-3 mb-2">
              <FaPhoneAlt className="text-[#E2B649] text-2xl" />
              <h2 className="text-2xl font-bold text-[#E2B649]">Phone</h2>
            </div>
            <p className="text-gray-300">+65 9123 4567</p>
            <p className="text-gray-400">Mon–Sat: 9:00 AM – 6:00 PM</p>
          </div>

          {/* Email */}
          <div>
            <div className="flex items-center gap-3 mb-2">
              <FaEnvelope className="text-[#E2B649] text-2xl" />
              <h2 className="text-2xl font-bold text-[#E2B649]">Email</h2>
            </div>
            <a
              href="mailto:info@goldeneaglecleaning.sg"
              className="text-gray-300 hover:text-[#E2B649] transition"
            >
              info@goldeneaglecleaning.sg
            </a>
          </div>

          {/* Director */}
          <div>
            <div className="flex items-center gap-3 mb-2">
              <FaUserTie className="text-[#E2B649] text-2xl" />
              <h2 className="text-2xl font-bold text-[#E2B649]">Director</h2>
            </div>
            <p className="text-gray-300">Syedyusof bin Abdul Majid</p>
          </div>
        </div>

        {/* Right Column — Contact Form */}
        <div className="bg-[#111111] p-8 rounded-2xl border border-[#2a2a2a] shadow-lg">
          <h2 className="text-2xl font-bold text-[#E2B649] mb-6">Message Us</h2>

          <form className="space-y-5">
            <div>
              <label className="block text-gray-400 mb-1">Full Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full bg-[#1a1a1a] text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E2B649]"
              />
            </div>

            <div>
              <label className="block text-gray-400 mb-1">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-[#1a1a1a] text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E2B649]"
              />
            </div>

            <div>
              <label className="block text-gray-400 mb-1">Message</label>
              <textarea
                rows="4"
                placeholder="Write your message"
                className="w-full bg-[#1a1a1a] text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E2B649]"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-[#E2B649] text-black font-semibold py-3 rounded-lg hover:bg-[#d4aa3c] transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* ===== Google Map ===== */}
      <div className="max-w-6xl mx-auto mt-16">
        <iframe
          className="w-full h-80 rounded-2xl border-2 border-[#E2B649]"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.703949295771!2d103.84647187496558!3d1.3727526986062366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da16e5ecf2dbf9%3A0x6f2478ad3b4f8f13!2s603%20Ang%20Mo%20Kio%20Ave%205%2C%20Singapore%20560603!5e0!3m2!1sen!2ssg!4v1701685575391!5m2!1sen!2ssg"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Golden Eagle Location"
        ></iframe>
      </div>

      {/* ===== Footer ===== */}
      <footer className="text-center text-gray-500 mt-10 pt-6 border-t border-[#2a2a2a]">
        © {new Date().getFullYear()}{" "}
        <span className="text-[#E2B649] font-semibold">
          Golden Eagle Cleaning Solution Pte. Ltd.
        </span>{" "}
        — All Rights Reserved.
      </footer>
    </div>
  );
};

export default ContactUs;
