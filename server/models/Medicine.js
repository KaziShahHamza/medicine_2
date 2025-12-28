// server/models/Medicine.js
import mongoose from "mongoose";

const medicineSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  name: String,
  dosageTimes: {
    type: [String],
    enum: ["morning", "noon", "night"]
  }
}, { timestamps: true });

export default mongoose.model("Medicine", medicineSchema);
