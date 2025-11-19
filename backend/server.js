// Golden-Eagle/backend/server.js
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bookingRoutes from "./routes/bookingRoutes.js";

dotenv.config();

const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
	cors({
		origin: ["http://localhost:5173", "http://localhost:3000"],
		methods: "GET,POST,PUT,DELETE",
		credentials: false,
	})
);

// Routes
app.use("/api/book", bookingRoutes);

// Health check
app.get("/", (req, res) => res.send("API running..."));

// Start server (single app.listen)
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
