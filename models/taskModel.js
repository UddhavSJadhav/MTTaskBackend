import mongoose from "mongoose";
const { Schema, model } = mongoose;

const TaskSchema = new Schema(
  {
    flag: { type: Boolean, default: false },
    description: { type: String },
  },
  { timestamps: true }
);

export const Task = model("Task", TaskSchema);
