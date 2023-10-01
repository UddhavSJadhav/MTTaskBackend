import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

import { connentDB } from "./utils/database.js";

import TaskRoutes from "./routes/taskRoutes.js";

const PORT = process.env.PORT || 8000;
const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (_, res) => res.json({ message: "Server is running!" }));
app.use("/task", TaskRoutes);

export const startServer = () => {
  try {
    connentDB();
    app.listen(PORT, () => console.log("Server is running on PORT:", PORT));
  } catch (error) {
    console.log("Server running failed");
    console.log(error);
  }
};
