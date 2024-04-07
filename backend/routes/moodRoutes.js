import express from "express";
import { getMoodsByUserID } from "../controllers/moodController.js";

const router = express.Router();
router.route("/list/:userID").get(getMoodsByUserID);

export default router;
