import express from "express";
import verifyToken from "../middleware/verifyToken.js";
import { register, login, getUserInfo } from "../controllers/userController.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/me", verifyToken, getUserInfo);

export default router;
