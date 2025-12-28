import mongoose from "mongoose";

const healthLogSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },

    type: {
      type: String,
      enum: ["bp", "diabetes"],
      required: true
    },

    High: Number,   // BP only
    Low: Number,  // BP only

    glucose: Number,    // Diabetes only

    note: String,

    createdAt: {
      type: Date,
      default: Date.now
    }
  },
  { timestamps: true }
);

export default mongoose.model("HealthLog", healthLogSchema);
