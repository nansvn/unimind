import express from "express";
import dotenv from "dotenv";
dotenv.config();

import connectDB from "./config/db.js";
connectDB();

import MoodRoutes from "./routes/moodRoutes.js";
import UserRoutes from "./routes/userRoutes.js";

import cors from "cors";
const port = process.env.PORT || 5000;

const app = express();
app.use(express.json());
app.use(
	cors({
		origin: "http://localhost:3000", // Specify the origin(s) that are allowed to access the resource
		methods: "GET,POST,PUT,DELETE", // Specify the allowed HTTP methods
		credentials: true, // Enable credentials
		allowedHeaders: "Content-Type,Authorization", // Specify the headers that can be used when making the actual request
	})
);

// Routes
app.use("/api/mood", MoodRoutes);
app.use("/api/auth", UserRoutes);

app.listen(port, () => {
	console.log(`Server running in ${process.env.NODE_ENV} mode on port ${port}`);
});
