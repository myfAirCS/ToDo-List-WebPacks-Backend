import mongoose from "mongoose";

const todoSchema = new mongoose.Schema(
  {
    Title: String,
    Status: Boolean,
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

export const Todo = mongoose.model("Todo", todoSchema);
