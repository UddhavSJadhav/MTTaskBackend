import { Task } from "../models/taskModel.js";

export const getAllTasks = async (req, res) => {
  try {
    const data = await Task.find().sort("-createdAt").lean();
    res.status(200).json({ data });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong, Retry!" });
  }
};

export const postTask = async (req, res) => {
  try {
    await Task.create({ ...req.body });
    res.status(200).json({ message: "Task added!" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong, Retry!" });
  }
};

export const updateTask = async (req, res) => {
  try {
    await Task.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({ message: "Task Updated!" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong, Retry!" });
  }
};

export const deleteTask = async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Task deleted!" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong, Retry!" });
  }
};
