const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    tittle: {
      type: String,
      trim: true,
      required: "Tittle is required",
      maxlength: [101, "Too long"],
    },
    slug: {
      type: String,
      unique: true,
      lowercase: true,
      index: true,
    },
    brief: {
        type: String,
        trim: true,
        required: "Tittle is required",
        maxlength: [512, "Too long"],
    },
    images: {
        type: Array,
    },
    status: {
      type: String,
      default: "Active",
      enum: ["Active", "Inactive"],
    },
    category: [{ type: ObjectId, ref: "Category" }],
    user: [{ type: ObjectId, ref: "User" }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", postSchema);