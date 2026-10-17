import express from "express";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import {
  addToCart,
  getCart,
  removeCartItem,
  updateCartItem,
} from "../controller/cart.controllers.js";
const router = express.Router();
router.use(authMiddleware);
router.get("/", getCart);
router.post("/items", addToCart);
router.put("/items/:id", updateCartItem);
router.delete("/items/:id", removeCartItem);
export default router;
