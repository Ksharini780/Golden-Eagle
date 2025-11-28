// Golden-Eagle/backend/controllers/feedbackController.js
import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

const {
	SENDER_EMAIL,
	SENDER_APP_PASSWORD,
	OWNER_EMAIL_FEEDBACK,
	OWNER_EMAIL,
	SITE_NAME = "Golden Eagle Solutions",
} = process.env;

// Resolve feedback owners list
const feedbackOwnerRaw = OWNER_EMAIL_FEEDBACK || OWNER_EMAIL || "";
const feedbackOwnerList = feedbackOwnerRaw
	? feedbackOwnerRaw
			.split(",")
			.map((e) => e.trim())
			.filter(Boolean)
	: [];

export const submitFeedback = async (req, res) => {
	try {
		const { name, email, message } = req.body;

		if (!name || !email || !message) {
			return res.status(400).json({
				success: false,
				message: "Name, email and message are required.",
			});
		}

		// Hostinger SMTP Transport
		const transporter = nodemailer.createTransport({
			host: "smtp.hostinger.com",
			port: 465,
			secure: true,
			auth: {
				user: SENDER_EMAIL,
				pass: SENDER_APP_PASSWORD,
			},
		});

		// -----------------------------------------
		//  PROFESSIONAL + LOW-SPAM TEMPLATE
		// -----------------------------------------
		const htmlTemplate = `
			<div style="font-family: Arial, Helvetica, sans-serif; color: #333; line-height: 1.6; max-width: 600px;">
				<p style="font-size: 16px;">Dear Yusof,</p>

				<p style="font-size: 15px;">
					You have received a new customer inquiry from 
					<strong>${SITE_NAME}</strong>.
				</p>

				<div style="margin-top: 15px;">
					<p style="font-size: 15px; margin-bottom: 6px;"><strong>Customer Details</strong></p>
					<p style="margin: 4px 0;">Name: <strong>${name}</strong></p>
					<p style="margin: 4px 0;">Email: <strong>${email}</strong></p>
				</div>

				<div style="margin-top: 20px;">
					<p style="font-size: 15px; margin-bottom: 6px;"><strong>Message</strong></p>
					<div >
						${message}
					</div>
				</div>

				<p style="margin-top: 25px; font-size: 15px;">Regards,<br/>${SITE_NAME}</p>

				<hr style="margin-top: 25px; border: none; border-top: 1px solid #ddd;" />
				<p style="font-size: 12px; color: #777;">
					This email was automatically generated from the website feedback form.<br/>
					If you believe this email is not intended for you, please ignore it.
				</p>
			</div>
		`;

		const textVersion = `
Dear Yusof,

You have received a new customer inquiry from ${SITE_NAME}.

Customer Details:
Name: ${name}
Email: ${email}

Message:
${message}

Regards,
${SITE_NAME}

-- Auto-generated feedback notification
		`;

		// -----------------------------------------
		// SEND FEEDBACK EMAIL
		// -----------------------------------------
		await transporter.sendMail({
			from: `"${SITE_NAME}" <${SENDER_EMAIL}>`,
			to: feedbackOwnerList,
			subject: `New Customer Inquiry – ${name}`,
			text: textVersion,
			html: htmlTemplate,

			// Reduce spam flags
			headers: {
				"X-Priority": "3",
				"List-Unsubscribe": `<mailto:${SENDER_EMAIL}>`,
			},
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
