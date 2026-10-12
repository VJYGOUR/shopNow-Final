import Category from "../models/category.model.js";
export const getCategories = async (req, res) => {
  try {
    const categories = await Category.find().sort({ createdAt: -1 });
    if (categories.length === 0) {
      return res.status(200).json({ message: "please create category first" });
    }
    return res.status(200).json({ message: "categories found", categories });
  } catch (err) {
    console.error("getallcategories error:", err.message);
    return res.status(500).json({ message: err.message });
  }
};
export const getCategory = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    if (!category) {
      return res.status(400).json({ message: "category not found" });
    }
    return res.status(200).json({ category });
  } catch (err) {
    console.error("erro in getcategorybyid:", err.message);
    return res.status(500).json({ message: err.message });
  }
};
export const createCategory = async (req, res) => {
  const { name, image } = req.body;
  if (!name) {
    return res.status(400).json({ message: "category name is required" });
  }
  try {
    const category = await Category.create({ name, image });
    return res
      .status(201)
      .json({ message: "category created successfully", category });
  } catch (err) {
    console.error("error in category:", err.message);

    return res.status(500).json({ message: err.message });
  }
};
export const updateCategory = async (req, res) => {
  const { name, image } = req.body;
  try {
    const category = await Category.findById(req.params.id);
    if (!category) {
      return res.status(400).json({ message: "category not found" });
    }
    if (name !== undefined) {
      category.name = name;
    }
    if (image !== undefined) {
      category.image = image;
    }
    await category.save();
    return res
      .status(200)
      .json({ message: "category updated successfully", category });
  } catch (err) {
    console.error("error in update category:", err.message);
    return res.status(500).json({ message: err.message });
  }
};
export const deleteCategory = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    if (!category) {
      return res.status(400).json({ message: "category not found" });
    }
    await category.deleteOne();
    return res.status(200).json({ message: "category deleted successfully" });
  } catch (err) {
    console.error("error in deletcategory:", err.message);
    return res.status(500).json({ message: err.message });
  }
};
