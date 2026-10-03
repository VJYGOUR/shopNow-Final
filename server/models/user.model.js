import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
    },
    password: {
      type: String,
      require: true,
    },
    phone: String,
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
    addresses: [
      {
        fullName: String,
        phone: String,
        addressLine1: String,
        addressLine2: String,
        city: String,
        state: String,
        postalCode: String,
        country: String,
      },
    ],
  },
  { timestamps: true },
);
const User = mongoose.model("User", userSchema);
export default User;
