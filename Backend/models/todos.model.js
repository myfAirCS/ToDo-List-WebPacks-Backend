import mongoose from "mongoose";

const todoSchema = new mongoose.Schema(
  {
    task: String,
    completed: Boolean,
    User: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

export const Todo = mongoose.model("Todo", todoSchema);
