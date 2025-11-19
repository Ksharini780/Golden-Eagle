// Golden-Eagle/backend/routes/bookingRoutes.js
import express from "express";
import { submitBooking } from "../controllers/bookingController.js";

const router = express.Router();

// POST /api/book/submit
router.post("/submit", submitBooking);

export default router;
