import express from "express";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import {
  createCategory,
  deleteCategory,
  getCategories,
  getCategory,
  updateCategory,
} from "../controller/category.controllers.js";
import { adminMiddleware } from "../middlewares/adminMiddleware.js";
const router = express.Router();
router.get("/", getCategories);
router.get("/:id", getCategory);
router.post("/create", authMiddleware, adminMiddleware, createCategory);
router.put("/:id", authMiddleware, adminMiddleware, updateCategory);
router.delete("/:id", authMiddleware, adminMiddleware, deleteCategory);
export default router;
