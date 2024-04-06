import express from "express";
import dotenv from "dotenv";
dotenv.config();

import connectDB from "./config/db.js";
connectDB();

import { notFound, errorHandler } from "./middleware/errorHandler.js";

const port = process.env.PORT || 5000;
const app = express();

app.get("/", (req, res) => {
	res.send("API is running...");
});

// Error handling middleware
app.use(notFound);
app.use(errorHandler);

app.listen(port, () =>
	console.log(`Server running in ${process.env.NODE_ENV} mode on port ${port}`)
);
