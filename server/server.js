import "dotenv/config";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import connectDB from "./config/db.js";
import authRoute from "./routes/auth.routes.js";
//1) instance of express
const app = express();
//2) register middlewar
app.use(
  cors({
    origin: "http://localhost:5173",
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
const PORT = 5000;
app.listen(PORT, () => console.log("server is running on port 5000"));
