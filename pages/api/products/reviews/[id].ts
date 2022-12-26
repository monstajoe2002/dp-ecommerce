import type { NextApiRequest, NextApiResponse } from "next";
import { connectToMongo } from "../../../../backend/database/db";
import { Review } from "../../../../backend/model/Review";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await connectToMongo();
  switch (req.method) {
    case "POST":
      await Review.create(req.body);
      res.status(201).json({ message: "Review published" });
      break;

    default:
      break;
  }
}
