import slugify from "slugify";
import mongoose from "mongoose";
const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    slug: {
      type: String,
      required: false,
      unique: true,
      index: true,
      lowercase: true,
    },
    image: {
      type: String,
      default: "",
    },
  },
  { timestamps: true },
);
//slug before saving data to db
categorySchema.pre("save", async function () {
  if (this.isModified("name")) {
    this.slug = slugify(this.name, {
      lower: true,
      strict: true,
      trim: true,
    });
  }
});
const Category = mongoose.model("Category", categorySchema);
export default Category;
