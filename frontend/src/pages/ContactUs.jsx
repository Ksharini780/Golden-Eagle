import React, { useState } from "react";
import "./ContactUs.css";
import Footer from "../components/Footer";

const ContactUs = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");

	// NEW: Prevent duplicate clicks
	const [isSubmitting, setIsSubmitting] = useState(false);

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (isSubmitting) return; // block multiple clicks
		setIsSubmitting(true);

		try {
			const res = await fetch("http://localhost:5000/api/feedback/send", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ name, email, message }),
			});

			const data = await res.json();

			if (data.success) {
				alert("Feedback sent successfully!");
				setName("");
				setEmail("");
				setMessage("");
			} else {
				alert("Failed to send message. Try again.");
			}
		} catch (err) {
			alert("Something went wrong.");
		}

		setIsSubmitting(false);
	};

	return (
		<>
			<div className="contact-page">
				<h1 className="contact-title">Get in Touch</h1>

				<p className="contact-description">
					We at <strong className="golden-text">Golden Eagle Solutions</strong>{" "}
					are dedicated to delivering exceptional cleaning and maintenance
					services for commercial, industrial, and marine environments across
					Singapore today.
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
							<p>info@goldeneagle-solutions.com</p>
						</div>
					</div>

					{/* Right Section - Form */}
					<div className="contact-form">
						<h3>Message Us</h3>

						<form onSubmit={handleSubmit}>
							<input
								type="text"
								placeholder="Full Name"
								required
								value={name}
								onChange={(e) => setName(e.target.value)}
							/>

							<input
								type="email"
								placeholder="Email"
								required
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>

							<textarea
								placeholder="Message"
								rows="5"
								required
								value={message}
								onChange={(e) => setMessage(e.target.value)}
							></textarea>

							{/* NEW BUTTON LOGIC */}
							<button type="submit" disabled={isSubmitting}>
								{isSubmitting ? "Sending Message..." : "Send Message"}
							</button>
						</form>
					</div>
				</div>

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
