import express from "express";
import Service from "../models/Service.js";

const router = express.Router();

// Get all services
router.get("/", async (req, res) => {
  const services = await Service.find();
  res.json(services);
});

// Add a new service (for admin)
router.post("/", async (req, res) => {
  const newService = new Service(req.body);
  await newService.save();
  res.json(newService);
});

export default router;
