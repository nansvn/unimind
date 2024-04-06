import moodController from "../controllers/moodController.js";
import express from "express";

const router = express.Router();

router.route("/").get(moodController.getMoods).post(moodController.createMood);
router
	.route("/:id")
	.get(moodController.getMoodByID)
	.put(moodController.updateMood)
	.delete(moodController.deleteMood);
export default router;
