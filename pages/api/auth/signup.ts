import type { NextApiRequest, NextApiResponse } from "next";

const User = require("../../../backend/model/User");
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case "POST":
      await User.create(req.body);
      res.status(201).json({ message: "User created" });
      break;

    default:
      break;
  }
}
