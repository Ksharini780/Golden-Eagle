// Golden-Eagle/backend/routes/feedbackRoutes.js
import express from "express";
import { submitFeedback } from "../controllers/feedbackController.js";

const router = express.Router();

// POST /api/feedback/send
router.post("/send", submitFeedback);

export default router;
