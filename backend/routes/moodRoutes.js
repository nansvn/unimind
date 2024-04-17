import express from "express";
import {
	getMoodsByUserID,
	getMoodByID,
	deleteMood,
	createMood,
	updateMood,
} from "../controllers/moodController.js";

const router = express.Router();
router.route("/").post(createMood);
router.route("/list/:userID").get(getMoodsByUserID);
router.route("/:moodID").delete(deleteMood).get(getMoodByID).put(updateMood);
export default router;
