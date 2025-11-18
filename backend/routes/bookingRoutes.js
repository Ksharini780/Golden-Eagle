import express from "express";
import { submitBooking } from "../controllers/bookingController.js";

const router = express.Router();

router.post("/submit", (req, res) => {
  console.log("BOOKING RECEIVED:", req.body);
  res.status(200).json({ success: true });
});

export default router;
