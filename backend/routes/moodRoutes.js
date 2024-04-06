import express from "express";
const router = express.Router();
import {
	getMoodEntries,
	getMoodEntryById,
} from "../controllers/moodController.js";

router.route("/").get(getMoodEntries);
router.route("/:id").get(getMoodEntryById);

export default router;
