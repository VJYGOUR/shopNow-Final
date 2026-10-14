import Category from "../models/category.model.js";
import Product from "../models/product.model.js";

export const getAllProduct = async (req, res) => {
  try {
    const products = await Product.find({ status: "active" })
      .populate("category", "name slug")
      .sort({ createdAt: -1 });
    if (products.length === 0) {
      return res.status(200).json({ message: "please create product first" });
    }
    return res.status(200).json({ products });
  } catch (error) {
    console.error("error in getAllProduct:", error.message);
    return res.status(500).json({ message: error.message });
  }
};
export const getProductById = async (req, res) => {
  try {
    const product = await Product.findOne({
      _id: req.params.id,
      status: "active",
    }).populate("category", "name slug");
    if (!product) {
      return res.status(400).json({ message: "there is no any product" });
    }
    return res
      .status(200)
      .json({ message: "product found successfully", product });
  } catch (error) {
    console.error("error in getProductbyid:", error.message);
    return res.status(500).json({ message: error.message });
  }
};
export const getAdminProduct = async (req, res) => {
  try {
    const products = await Product.find()
      .populate("category", "name slug")
      .sort({ createdAt: -1 });
    if (products.length === 0) {
      return res.status(200).json({ message: "please create product first" });
    }
    return res.status(200).json({ products });
  } catch (error) {
    console.error("error in getAdminProdcut:", error.message);
    return res.status(500).json({ message: error.message });
  }
};
export const createProduct = async (req, res) => {
  const { name, description, sku, price, stock, images, category } = req.body;
  try {
    const existingCategory = await Category.exists({ _id: category });
    if (!existingCategory) {
      return res.status(400).json({ message: "invalid Category" });
    }
    const product = await Product.create({
      name,
      description,
      sku,
      price,
      stock,
      images,
      category,
    });
    return res
      .status(201)
      .json({ message: "product created successfully", product });
  } catch (error) {
    console.error("error in createProduct:", error.message);
    return res.status(500).json({ message: error.message });
  }
};
export const updateProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(400).json({ message: "product not found" });
    }
    Object.assign(product, req.body);
    await product.save();
    return res
      .status(200)
      .json({ message: "product updated successfully", product });
  } catch (error) {
    console.error("error in updateProduct:", error.message);
    return res.status(500).json({ message: error.message });
  }
};
export const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(400).json({ message: "product not found" });
    }
    await product.deleteOne();
    return res.status(200).json({ message: "product deleted sucessfully" });
  } catch (error) {
    console.error("error in deleteProduct:", error.message);
    return res.status(500).json({ message: error.message });
  }
};
