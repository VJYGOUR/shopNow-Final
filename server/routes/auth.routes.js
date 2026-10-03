import express from "express";
import {
  authMe,
  login,
  logout,
  registerUser,
} from "../controller/auth.controllers.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";
const router = express.Router();
router.post("/register", registerUser);
router.post("/login", login);
router.post("/logout", authMiddleware, logout);
router.get("/authme", authMiddleware, authMe);
export default router;
