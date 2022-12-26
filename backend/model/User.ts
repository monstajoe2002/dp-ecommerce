import mongoose from "mongoose";
import { connectToMongo } from "../database/db";
connectToMongo();

export const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    unique: true,
    required: true,
  },
  role: {
    type: String,
    unique: true,
    required: true,
  },
});

export const User = mongoose.model("User", userSchema);
