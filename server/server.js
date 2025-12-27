// server/server.js
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import medicineRoutes from "./routes/medicine.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/medisync2")
  .then(() => console.log("MongoDB connected"));

app.use("/api/medicines", medicineRoutes);

app.listen(5000, () => console.log("Server running on port 5000"));
