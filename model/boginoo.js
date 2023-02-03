const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const URLSchema = new Schema({
  long: { type: String },
  short: { type: String },
  user: { type: String },
});

const Link = mongoose.model("URL", URLSchema);

module.exports = Link;
