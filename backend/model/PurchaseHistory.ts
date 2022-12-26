import mongoose from "mongoose";

const purchaseHistorySchema = new mongoose.Schema({
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },

  cart: {
    type: String
  }
});
export const PurchaseHistory = mongoose.model("PurchaseHistory", purchaseHistorySchema);