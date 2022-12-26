import type { NextApiRequest, NextApiResponse } from "next";
import { connectToMongo } from "../../../backend/database/db";
import { PurchaseHistory } from "../../../backend/model/PurchaseHistory";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await connectToMongo();
  switch (req.method) {
    case "POST":
      await PurchaseHistory.create(req.body);
      res.status(201).json({ message: "Purchase History created" });
      break;

    default:
      break;
  }
}
