import mongoose from "mongoose";
import { DB_name } from "../constant.js";
export async function connectDB() {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_name}`
    );
    console.log(`MongoDB connected: ${connectionInstance.connection.host}`);
  } catch (error) {
    console.error("Issue Arrised :", error.message);
  }
}
