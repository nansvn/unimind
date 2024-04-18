import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import dotenv from "dotenv";
dotenv.config();

import User from "../models/userModel.js";

// ----------------------------------------------------------------------
export const register = async (req, res) => {
	try {
		const { firstname, lastname, email, password } = req.body;

		// Check if user already exists
		const exsitUser = await User.findOne({ email: email });

		if (exsitUser) {
			return res.status(400).json({ message: "User already exists. " });
		}

		// Hash password
		const salt = await bcrypt.genSalt();
		const passwordHash = await bcrypt.hash(password, salt);

		// Create user
		const user = new User({
			firstname: firstname,
			lastname: lastname,
			email: email,
			password: passwordHash,
			image: null,
		});
		const accessToken = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
			expiresIn: "3 days",
		});

		const newUser = await user.save();
		res.status(200).json({
			accessToken,
			user,
		});
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

export const login = async (req, res) => {
	try {
		const { email, password } = req.body;

		// Check if user already exists
		const user = await User.findOne({ email: email });
		if (!user) {
			return res.status(400).json({ message: "This email is not registered " });
		}

		// Check if password is correct
		const isMatch = await bcrypt.compare(password, user.password);
		if (!isMatch) {
			return res.status(400).json({ message: "Incorrect password. " });
		}

		// Generate token
		const accessToken = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
			expiresIn: "3 days",
		});

		res.header("auth-token", accessToken);

		res.status(200).json({
			accessToken,
			user,
		});
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
};

export const getUserInfo = async (req, res) => {
	try {
		const { authorization } = req.headers;

		if (!authorization) {
			res.status(401).json({
				message: "Authorization token missing",
			});
			return;
		}

		const accessToken = `${authorization}`.split(" ")[1];

		const data = verify(accessToken, process.env.JWT_SECRET);

		const userId = typeof data === "object" ? data?._id : "";

		const user = User.find((user) => user._id === userId);

		if (!user) return res.status(404).send("User not found");

		res.status(200).json(user);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};
