import mongoose from "mongoose";
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log("mongodb is connected");
  } catch (error) {
    console.error("mongodb connection failed", error.message);
    process.exit(1);
  }
};
export default connectDB;
