import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

export const submitBooking = async (req, res) => {
  const { name, email, phone, services, message } = req.body; // FIXED HERE

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true,
      auth: {
        user: process.env.SENDER_EMAIL,
        pass: process.env.APP_PASSWORD,
      },
    });

    const admins = [
      process.env.ADMIN_EMAIL_1,
      process.env.ADMIN_EMAIL_2,
      process.env.ADMIN_EMAIL_3,
    ];

    await transporter.sendMail({
      from: process.env.SENDER_EMAIL,
      to: admins,
      subject: "New Booking Request",
      html: `
        <h3>New Booking Details</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Services:</b> ${services?.join(", ")}</p>
        <p><b>Message:</b> ${message || "No additional message"}</p>
      `,
    });

    return res.json({
      success: true,
      message: "Booking submitted successfully",
    });
  } catch (error) {
    console.log("Email Error:", error);
    return res.status(500).json({ success: false, message: "Email failed" });
  }
};
