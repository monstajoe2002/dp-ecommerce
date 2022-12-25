import mongoose from "mongoose";
import type { NextApiRequest, NextApiResponse } from "next";
import { connectToMongo } from "../../../backend/database/db";
import { userSchema } from "../../../backend/model/User";
const User=mongoose.model("User")
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case "POST":
      await connectToMongo();
      await User.create(req.body);
      res.status(201).json({ message: "User created" });
      break;

    default:
      break;
  }
}
