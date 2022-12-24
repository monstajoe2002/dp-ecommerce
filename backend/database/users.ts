import { Schema, model, connect } from "mongoose";
import { UserRole } from "../../types/UserRole";
require("dotenv").config();

const userSchema = new Schema({
  username: String,
  password: String,
  // role:UserRole
});
export async function run() {
  await connect(process.env.MONGO_URI as string).then(() =>
    console.log("Connected to MongoDB")
  );
}
