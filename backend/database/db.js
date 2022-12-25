import mongoose from "mongoose";

export async function connectToMongo() {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error(error);
    }
}
export function createModel(name, schema) {
    return mongoose.model(name, schema);
}

