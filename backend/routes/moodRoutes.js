import express from "express";
import {
	getMoodsByUserID,
	deleteMood,
	createMood,
} from "../controllers/moodController.js";

const router = express.Router();
router.route("/").post(createMood);
router.route("/list/:userID").get(getMoodsByUserID);
router.route("/:moodID").delete(deleteMood);
export default router;
