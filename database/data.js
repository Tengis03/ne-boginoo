const mongoose = require("mongoose");
require("dotenv").config();

const uri =
  "mongodb+srv://Tengis0306:20090306@cluster0.tvsgxw4.mongodb.net/boginoo";

exports.connect = async () => {
  console.log("Connecting to");
  try {
    await mongoose.connect(uri);
    console.log("Database connection");
  } catch (error) {
    console.error(error);
  }
};
