import express from "express";
import dotenv from "dotenv";
dotenv.config();

import connectDB from "./config/db.js";
connectDB();

import MoodRoutes from "./routes/moodRoutes.js";

const port = process.env.PORT || 5000;
const app = express();

app.use(express.json());

app.use("/api/mood", MoodRoutes);

app.listen(port, () => {
	console.log(`Server running in ${process.env.NODE_ENV} mode on port ${port}`);
});
