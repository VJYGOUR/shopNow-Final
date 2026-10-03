import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
export const registerUser = async (req, res) => {
  try {
    //1 extract user details name email pass
    const { name, email, password } = req.body;
    //2 if user already exist
    const existingUser = await User.findOne({ email });
    //3
    if (existingUser) {
      return res.status(400).json({ message: "user is already registered" });
    }
    //4 hash the pass
    const hashPassword = await bcrypt.hash(password, 10);
    //5 create user in DB
    const user = await User.create({
      name: name,
      email: email,
      password: hashPassword,
    });
    //6 send res
    return res.status(200).json({
      message: "user is created successfully",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
export const login = async (req, res) => {
  try {
    //1 extract email and pass from body
    const { email, password } = req.body;
    //2 find user in db
    const user = await User.findOne({ email });
    //3
    if (!user) {
      return res.status(400).json({ message: "user is not registred" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({
        message: "password is wrong",
      });
    }
    const generateToken = (userId) => {
      return jwt.sign({ userId }, process.env.JWT_SECRET_KEY, {
        expiresIn: "7d",
      });
    };
    const token = generateToken(user._id);
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });
    return res.status(201).json({
      message: "login successfully",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (err) {
    return res.status(500).json({
      message: err.message,
    });
  }
};
export const logout = async (req, res) => {
  res.clearCookie("token");
  return res.status(200).json({ message: "logout successfully" });
};
export const authMe = async (req, res) => {
  try {
    return res
      .status(200)
      .json({ message: "Authenticated user", user: req.user });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};
