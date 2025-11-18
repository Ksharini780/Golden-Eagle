import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import bookingRoutes from "./routes/bookingRoutes.js"; // <-- Make sure folder name matches

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());


app.use("/api/book", bookingRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
