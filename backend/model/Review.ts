import mongoose, { Schema } from "mongoose";

const reviewSchema = new mongoose.Schema({
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
    user: {
        type: String
    },
    review: {
        type: String,
    }
})
export const Review = mongoose.models.Review || mongoose.model("Review", reviewSchema);