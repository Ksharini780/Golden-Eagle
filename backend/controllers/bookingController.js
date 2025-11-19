// Golden-Eagle/backend/controllers/bookingController.js
import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

const {
	SENDER_EMAIL,
	SENDER_APP_PASSWORD,
	OWNER_EMAIL,
	SITE_NAME = "Golden Eagle",
} = process.env;

/**
 * submitBooking - expects JSON body:
 * { name, email, phone, services (array or string), message }
 *
 * Sends an email to OWNER_EMAIL with Reply-To set to user's email.
 */
export const submitBooking = async (req, res) => {
	try {
		const { name, email, phone, services, message } = req.body;

		// Basic validation
		if (!name || !email || !phone) {
			return res.status(400).json({
				success: false,
				message: "name, email and phone are required.",
			});
		}

		// Prepare chosen services string
		const servicesText = Array.isArray(services)
			? services.join(", ")
			: String(services || "Not provided");

		// Create transporter for Gmail (App Password)
		const transporter = nodemailer.createTransport({
			service: "gmail",
			auth: {
				user: SENDER_EMAIL,
				pass: SENDER_APP_PASSWORD,
			},
		});

		// Owner email content
		const ownerMail = {
			from: `"${SITE_NAME} Website" <${SENDER_EMAIL}>`,
			to: OWNER_EMAIL,
			replyTo: email, // IMPORTANT: Replying to the owner will reply to the user
			subject: `New booking request from ${name}`,
			text: `New booking request
Name: ${name}
Email: ${email}
Phone: ${phone}
Services: ${servicesText}
Message: ${message || "No additional message"}
-- This email was sent from your website contact form.`,
			html: `<h3>New booking request</h3>
<p><strong>Name:</strong> ${name}</p>
<p><strong>Email:</strong> ${email}</p>
<p><strong>Phone:</strong> ${phone}</p>
<p><strong>Services:</strong> ${servicesText}</p>
<p><strong>Message:</strong> ${message || "No additional message"}</p>
<hr/>
<p><small>This email was sent from your website contact form.</small></p>`,
		};

		// Send to owner
		await transporter.sendMail(ownerMail);

		// Optional: send a confirmation email to the user (commented by default)
		// Uncomment the block below if you want to auto-confirm to customer.

		await transporter.sendMail({
			from: `"${SITE_NAME}" <${SENDER_EMAIL}>`,
			to: email,
			subject: `We received your booking request — ${SITE_NAME}`,
			text: `Hi ${name},\n\nThanks for contacting ${SITE_NAME}. We received your request and will be in touch soon.\n\n-- ${SITE_NAME}`,
		});

		return res.json({
			success: true,
			message: "Booking submitted successfully.",
		});
	} catch (err) {
		console.error("submitBooking error:", err);
		return res.status(500).json({
			success: false,
			message: "Failed to send booking email.",
			error: err.message,
		});
	}
};
