import { NextApiRequest, NextApiResponse } from "next";
import client from "../../backend/database/db";
const cartItems = () => {
    if(typeof window !== "undefined") {
        if(localStorage.getItem("cart")) {
            return JSON.parse(localStorage.getItem("cart") || "")
        }
    }
}
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case "GET":
      try {
        const history = await client
          .db("test")
          .collection("history")
          .find()
          .toArray();
        res.status(200).json(history);
      } catch (err) {
        res.status(500).json({ message: err });
      }
      break;
      case "POST":
          try {
            const history = await client
              .db("test")
              .collection("history")
              .insertOne(cartItems);
            res.status(200).json(history);
          }
          catch (err) {
            res.status(500).json({ message: err });
          }
            break;
  }
}
