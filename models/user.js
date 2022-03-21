const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const userSchema = new mongoose.Schema(
  {
    name: String,
    lastname: String,
    username: String,
    email: {
      type: String,
      required: true,
      index: true,
    },
    role: {
      type: String,
      default: "reader",
    },   
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);