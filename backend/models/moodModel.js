import mongoose from "mongoose";

const moodSchema = new mongoose.Schema({
	userID: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "User",
		required: true,
	},
	mood: {
		type: String,
		required: true,
	},
	weather: {
		type: String,
		required: true,
	},
	schoolActivities: [
		{
			type: String, // Array of strings to store multiple school activity icon IDs
			required: false,
		},
	],
	socialActivities: [
		{
			type: String, // Array of strings to store multiple social activity icon IDs
			required: false,
		},
	],
	tags: [
		{
			type: String, // Array of strings for tags
			required: false,
		},
	],
	comment: {
		type: String,
		trim: true,
		maxlength: 200,
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
	updatedAt: {
		type: Date,
		default: Date.now,
	},
});

const Mood = mongoose.model("Mood", moodSchema);

export default Mood;
