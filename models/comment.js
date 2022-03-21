const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema(
  {
    comment: {
      type: String,
      trim: true,
      required: "Comment is required",
      maxlength: [256, "Too long"],
    },    
    status: {
      type: String,
      default: "Active",
      enum: ["Active", "Inactive"],
    },
    user: [{ type: ObjectId, ref: "User" }],
    post: [{ type: ObjectId, ref: "Post" }],    
  },
  { timestamps: true }
);

module.exports = mongoose.model("Comment", postSchema);