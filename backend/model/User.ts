import { createModel } from "../database/db";

const mongoose = require("mongoose");

export const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  role: String,
});

export const User = createModel("User", userSchema);
