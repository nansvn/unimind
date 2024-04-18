import Event from "../models/calendarModel";
import { getTime } from "date-fns";
import { formatColor } from "../utils/formatter";
// ----------------------------------------------------------------------

// @desc Get all events
// @route GET /api/calendar
// @access Public
export const getAllEvents = async (req, res) => {
	try {
		const events = await Event.find();
		res.status(200).json(events);
		console.log(events);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

export const createEvent = async (req, res) => {
	try {
		const { event } = req.body;
		const eventData = {
			...event,
			start: getTime(event.start),
			end: getTime(event.end),
			color: formatColor(event.color),
		};
		const newEvent = await Event.create(eventData);
		res.status(201).json(newEvent);
		console.log(newEvent);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};
