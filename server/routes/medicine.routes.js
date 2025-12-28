// server/routes/medicine.routes.js
import express from "express";
import Medicine from "../models/Medicine.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.get("/", auth, async (req, res) => {
  const meds = await Medicine.find({ user: req.userId });
  res.json(meds);
});

router.post("/", auth, async (req, res) => {
  const med = await Medicine.create({
    ...req.body,
    user: req.userId
  });
  res.json(med);
});

router.put("/:id", auth, async (req, res) => {
  await Medicine.findOneAndUpdate(
    { _id: req.params.id, user: req.userId },
    req.body
  );
  res.sendStatus(200);
});

router.delete("/:id", auth, async (req, res) => {
  await Medicine.findOneAndDelete({
    _id: req.params.id,
    user: req.userId
  });
  res.sendStatus(204);
});

export default router;
