import type { NextApiRequest, NextApiResponse } from "next";

import { CustomerService } from "../../backend/Users/Customer_Service";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    res.status(200).json({
      message: `Customer Service created successfully. We have received the following complaint: ${req.query.complaint}.`,
    });
  }
}
