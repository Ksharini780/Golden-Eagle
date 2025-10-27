import Booking from "../models/Booking.js";
import nodemailer from "nodemailer";

export const createBooking = async (req, res) => {
  try {
    const { name, number, address, serviceType } = req.body;

    const booking = new Booking({
      userId: null,
      serviceId: null,
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString(),
      address,
      status: "Pending"
    });

    await booking.save();

    // Send Email to Owner
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.OWNER_EMAIL,
        pass: process.env.OWNER_EMAIL_PASS
      }
    });

    const mailOptions = {
      from: process.env.OWNER_EMAIL,
      to: process.env.OWNER_EMAIL,
      subject: "New Cleaning Service Booking",
      text: `
New booking received:

Name: ${name}
Phone: ${number}
Address: ${address}
Service Type: ${serviceType}

Please contact the user to confirm the booking.
      `
    };

    await transporter.sendMail(mailOptions);

    res.json({ message: "Booking successful! Owner has been notified via email." });
  } catch (err) {
    res.status(500).json({ message: "Booking failed", error: err.message });
  }
};
