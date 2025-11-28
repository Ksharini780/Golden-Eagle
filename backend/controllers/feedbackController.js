// Golden-Eagle/backend/controllers/feedbackController.js
import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

const {
	SENDER_EMAIL,
	SENDER_APP_PASSWORD,
	OWNER_EMAIL,
	SITE_NAME = "Golden Eagle Solutions",
} = process.env;

const ownerList = OWNER_EMAIL.split(",").map((e) => e.trim());

// Handle feedback submission
export const submitFeedback = async (req, res) => {
	try {
		const { name, email, message } = req.body;

		if (!name || !email || !message) {
			return res.status(400).json({
				success: false,
				message: "Name, email and message are required.",
			});
		}

		// Hostinger SMTP transporter
		const transporter = nodemailer.createTransport({
			host: "smtp.hostinger.com",
			port: 465,
			secure: true,
			auth: {
				user: SENDER_EMAIL,
				pass: SENDER_APP_PASSWORD,
			},
		});

		// Email ONLY to owner
		await transporter.sendMail({
			from: `"${SITE_NAME} Feedback" <${SENDER_EMAIL}>`,
			to: ownerList,
			replyTo: email,
			subject: `New feedback from ${name}`,
			text: `New feedback message:

Name: ${name}
Email: ${email}
Message: ${message}

-- Sent from your website feedback form.`,
			html: `
                <h3>New Feedback Received</h3>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Message:</strong><br/>${message}</p>
                <hr/>
                <small>Sent from your website feedback form.</small>
            `,
		});

		return res.json({
			success: true,
			message: "Feedback sent successfully.",
		});
	} catch (err) {
		console.error("submitFeedback error:", err);
		return res.status(500).json({
			success: false,
			message: "Failed to send feedback.",
			error: err.message,
		});
	}
};
