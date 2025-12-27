// server/routes/medicine.routes.js
import express from "express";
import Medicine from "../models/Medicine.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const med = await Medicine.create(req.body);
    res.status(201).json(med);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.get("/", async (_, res) => {
  const meds = await Medicine.find({ active: true });
  res.json(meds);
});

router.delete("/:id", async (req, res) => {
  await Medicine.findByIdAndDelete(req.params.id);
  res.sendStatus(204);
});

export default router;
