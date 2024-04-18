import Mood from "../models/moodModel.js";

// @desc Get all moods by userID
// @route GET /api/moods/user/:id
// @access Public
export const getMoodsByUserID = async (req, res) => {
	try {
		const { userID } = req.params;
		const moods = await Mood.find({ userID }).sort({
			createdAt: -1,
		});

		if (!moods) {
			return res
				.status(404)
				.json({ message: "No moods found for the provided user ID." });
		}

		res.status(200).json(moods);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

// @desc Get mood by ID
// @route GET /api/moods/:id
// @access Public
export const getMoodByID = async (req, res) => {
	try {
		const { moodID } = req.params;
		const mood = await Mood.findById(moodID);

		if (!mood) {
			return res
				.status(404)
				.json({ message: "No mood found for the provided ID." });
		}

		res.status(200).json(mood);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

// @desc Create mood
// @route POST /api/moods
export const createMood = async (req, res) => {
	try {
		const mood = await Mood.create(req.body);
		res.status(201).json(mood);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

export const updateMood = async (req, res) => {
	try {
		const { moodID } = req.params;
		const updatedMood = await Mood.findByIdAndUpdate(moodID, req.body);
		res.send(updatedMood);
	} catch (error) {
		if (error.kind === "ObjectId") {
			return res.status(400).send({ message: "Invalid ID format." });
		}
		res.status(500).send({
			message: "Error updating mood with id " + id,
			error: error.message || "Internal server error.",
		});
	}
};

// @desc Delete mood
// @route DELETE /api/moods/:id
export const deleteMood = async (req, res) => {
	try {
		const { moodID } = req.params;
		const mood = await Mood.findByIdAndDelete(moodID);

		if (!mood) {
			return res
				.status(404)
				.json({ message: "No mood found for the provided ID." });
		}

		res.status(200).json(mood);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};
