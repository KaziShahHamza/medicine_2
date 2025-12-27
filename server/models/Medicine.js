// server/models/Medicine.js
import mongoose from "mongoose";

const medicineSchema = new mongoose.Schema({
  name: { type: String, required: true },
  dosageTimes: {
    type: [String],
    enum: ["morning", "noon", "night"],
    required: true
  },
  active: { type: Boolean, default: true }
}, { timestamps: true });

export default mongoose.model("Medicine", medicineSchema);
