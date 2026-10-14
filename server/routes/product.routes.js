import express from "express";
import { adminMiddleware } from "../middlewares/adminMiddleware.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import {
  createProduct,
  deleteProduct,
  getAdminProduct,
  getAllProduct,
  getProductById,
  updateProduct,
} from "../controller/product.controller.js";
const router = express.Router();
router.get("/", getAllProduct);
router.get("/admin", authMiddleware, adminMiddleware, getAdminProduct);
router.get("/:id", getProductById);
router.post("/create", authMiddleware, adminMiddleware, createProduct);
router.put("/:id", authMiddleware, adminMiddleware, updateProduct);
router.delete("/:id", authMiddleware, adminMiddleware, deleteProduct);
export default router;
