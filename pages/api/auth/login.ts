import mongoose from "mongoose";
import type { NextApiRequest, NextApiResponse } from "next";
import { connectToMongo } from "../../../backend/database/db";

import {User} from "../../../backend/model/User";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case "GET":
      const userLogin = req.query;
      const user = await User.findOne(userLogin);
      if (!user) {
        res.status(404).json({ message: "User not found" });
      }
        res.status(200).json(user);
      break;

    default:
      break;
  }
}
