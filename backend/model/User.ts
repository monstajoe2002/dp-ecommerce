import mongoose from "mongoose";
import { connectToMongo } from "../database/db";
connectToMongo();

export const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  role: String,
});

export const User=mongoose.model("User",userSchema)? mongoose.model("User",userSchema):mongoose.model("User");