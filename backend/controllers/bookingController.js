// Golden-Eagle/backend/controllers/bookingController.js
import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

const {
	SENDER_EMAIL,
	SENDER_APP_PASSWORD,
	OWNER_EMAIL_BOOKING,
	OWNER_EMAIL, // fallback if still present
	SITE_NAME = "Golden Eagle",
} = process.env;

// --------------------------------------------
// Reuse transporter to avoid recreating it every request
// --------------------------------------------
const transporter = nodemailer.createTransport({
	host: "smtp.hostinger.com",
	port: 465,
	secure: true, // SSL
	auth: {
		user: SENDER_EMAIL,
		pass: SENDER_APP_PASSWORD,
	},
});

// Resolve booking owners: prefer OWNER_EMAIL_BOOKING, fallback to OWNER_EMAIL
const bookingOwnerRaw = OWNER_EMAIL_BOOKING || OWNER_EMAIL || "";
const bookingOwnerList = bookingOwnerRaw
	? bookingOwnerRaw
			.split(",")
			.map((e) => e.trim())
			.filter(Boolean)
	: [];

/**
 * submitBooking - expects JSON body:
 * { name, email, phone, services (array or string), message }
 *
 * Sends an email to booking owner(s) with Reply-To set to user's email.
 * Sends confirmation email to user asynchronously.
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

		// --------------------------------------------
		// Owner email content
		// --------------------------------------------
		const ownerMail = {
			from: `"${SITE_NAME} Website" <${SENDER_EMAIL}>`,
			to: bookingOwnerList, // booking recipients
			replyTo: email,
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

		// --------------------------------------------
		// Send owner email first (awaited)
		// --------------------------------------------
		await transporter.sendMail(ownerMail);

		// --------------------------------------------
		// Send confirmation email asynchronously
		// --------------------------------------------
		transporter
			.sendMail({
				from: `"${SITE_NAME}" <${SENDER_EMAIL}>`,
				to: email,
				subject: `We received your booking request — ${SITE_NAME}`,
				text: `Hi ${name},\n\nThanks for contacting ${SITE_NAME}. We received your request and will be in touch soon.\n\n-- ${SITE_NAME}`,
			})
			.catch((err) =>
				console.error("Confirmation email error (non-blocking):", err)
			);

		// --------------------------------------------
		// Return response immediately after owner email
		// --------------------------------------------
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
