const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: "string",

    required: true,
  },
  password: {
    type: "string",
    // minenght : [8 ,"нууц үг ядаж 8 оронтой байх ёстой"],
    required: true,
  },
});

const User = mongoose.model("users", userSchema);

module.exports = User;
