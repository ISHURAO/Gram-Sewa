const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  role: String,
  state: String,
  district: String,
  tehsil: String,
  village: String,
});

module.exports = mongoose.model("User", userSchema);
