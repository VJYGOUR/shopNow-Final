import "dotenv/config";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import connectDB from "./config/db.js";
import path from "path";
import { fileURLToPath } from "url";
import authRoute from "./routes/auth.routes.js";
import categoryRoute from "./routes/category.routes.js";
import productRoute from "./routes/product.routes.js";
import cartRoute from "./routes/cart.routes.js";
//1) instance of express
const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
//2) register middlewar
app.use(
  cors({
    origin: process.env.FRONTEND,
    credentials: true,
  }),
);
app.use(express.json());
app.use(cookieParser());
connectDB();
//test api
app.get("/test", (req, res) => {
  return res.json({ message: "hello from nowhere" });
});
app.use("/api/auth", authRoute);
app.use("/api/category", categoryRoute);
app.use("/api/products", productRoute);
app.use("/api/cart", cartRoute);
//Serve React production build
const clientBuildPath = path.join(__dirname, "../client/dist");

app.use(express.static(clientBuildPath));

// React SPA fallback (Express 5 compatible)
app.get("/{*path}", (req, res, next) => {
  if (req.path.startsWith("/api/")) {
    return next();
  }

  res.sendFile(path.join(clientBuildPath, "index.html"), (err) => {
    if (err) next(err);
  });
});
const PORT = 5000;
app.listen(PORT, () => console.log("server is running on port 5000"));
