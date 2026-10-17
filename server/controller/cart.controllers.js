import { handleControllerError } from "../helper/handleControllerError.js";
import Cart from "../models/cart.model.js";
import Product from "../models/product.model.js";
export const getCart = async (req, res) => {
  try {
    let cart = await Cart.findOne({ user: req.user._id });
    if (!cart) {
      const cart = await Cart.create({ user: req.user._id, items: [] });
    }
    await populateCart(cart);
    return res.status(200).json({ message: "cart found successfully", cart });
  } catch (error) {
    return handleControllerError(res, error, "getCart");
  }
};
export const updateCartItem = async (req, res) => {
  try {
    const { quantity } = req.body;
    //check if q is positve and whole number
    if (!Number.isInteger(quantity) || quantity < 1) {
      return res.status(400).json({ message: "Invalid Quantity" });
    }
    const cart = await Cart.findOne({ user: req.user._id });
    if (!cart) {
      return res.status(400).json({ message: "Cart not found" });
    }
    const item = cart.items.find(
      (item) => item.product.toString() === req.params.id,
    );
    if (!item) {
      return res.status(400).json({ message: "cart item not found" });
    }
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(400).json({ message: "prodcut not found" });
    }
    if (quantity > product.stock) {
      return res.status(400).json({ message: "Not enough stock" });
    }
    item.quantity = quantity;
    await cart.save();
    await populateCart(cart);
    return res
      .status(200)
      .json({ message: "cart quantity updated successfully", cart });
  } catch (error) {
    return handleControllerError(res, error, "updateCartItem");
  }
};
export const removeCartItem = async (req, res) => {
  try {
    const cart = await Cart.findOne({ user: req.user._id });
    if (!cart) {
      return res.status(400).json({ message: "cart not found" });
    }
    cart.items = cart.items.filter(
      (item) => item.product.toString() !== req.params.id,
    );
    await cart.save();
    await populateCart(cart);
    return res.status(200).json({ message: "item remove successfully", cart });
  } catch (error) {
    return handleControllerError(res, error, "removeCartItem");
  }
};
const populateCart = (cart) =>
  cart.populate({
    path: "items.product",
    select: "name stock images price status",
  });
export const addToCart = async (req, res) => {
  const { productId, quantity = 1 } = req.body;
  if (!Number.isInteger(quantity) || quantity < 1) {
    return res.status(400).json({ message: "Invalid Quantity" });
  }
  try {
    const product = await Product.findOne({ _id: productId, status: "active" });
    if (!product) {
      return res.status(400).json({ message: "product not found" });
    }
    if (quantity > product.stock) {
      return res.status(400).json({ message: "Not enough stock" });
    }
    let cart = await Cart.findOne({ user: req.user._id });
    if (!cart) {
      cart = await Cart.create({ user: req.user._id, items: [] });
    }
    const item = cart.items.find(
      (item) => item.product.toString() === productId,
    );
    if (item) {
      item.quantity += quantity;
    } else {
      cart.items.push({ product: productId, quantity });
    }
    await cart.save();
    await populateCart(cart);
    return res.status(201).json({ message: "added to cart sucessfully", cart });
  } catch (error) {
    return handleControllerError(res, error, "addToCart");
  }
};
