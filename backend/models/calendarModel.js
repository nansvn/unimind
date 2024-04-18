import mongoose from "mongoose";

const eventSchema = new Schema({
	allDay: {
		type: Boolean,
		required: true,
	},
	color: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	start: {
		type: Date,
		required: true,
	},
	end: {
		type: Date,
		required: true,
	},
	title: {
		type: String,
		required: true,
	},
});

const Event = mongoose.model("events", eventSchema);

export default Event;
