import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors";
import bcrypt from "bcryptjs";

import users from "./data/users.js";
import User from "./models/userModel.js";
import moods from "./data/moods.js";
import Mood from "./models/moodModel.js";

import connectDB from "./config/db.js";
dotenv.config();
connectDB();

const importData = async () => {
	try {
		// Clear out the database
		await User.deleteMany();
		await Mood.deleteMany();

		// Hash user passwords
		const hashedUsers = users.map((user) => {
			const salt = bcrypt.genSaltSync(10);
			const hashedPassword = bcrypt.hashSync(user.password, salt);
			return { ...user, password: hashedPassword }; // Replace the plain password with the hashed one
		});

		// Insert the data
		await User.insertMany(hashedUsers);
		await Mood.insertMany(moods);

		console.log("Data Imported!".green.inverse);
		process.exit();
	} catch (error) {
		console.error(`${error}`.red.inverse);
		process.exit(1);
	}
};

const destroyData = async () => {
	try {
		// Clear out the database
		await User.deleteMany();
		await Mood.deleteMany();
		console.log("Data Destroyed!".yellow.inverse);
		process.exit();
	} catch (error) {
		console.error(`${error}`.yellow.inverse);
		process.exit(1);
	}
};

if (process.argv[2] === "-d") {
	destroyData();
} else {
	importData();
}
