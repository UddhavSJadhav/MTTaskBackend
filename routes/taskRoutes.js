import { Router } from "express";
const router = Router();

import {
  getAllTasks,
  postTask,
  updateTask,
  deleteTask,
} from "../controllers/taskContoller.js";

router.route("/").get(getAllTasks).post(postTask);
router.route("/:id").patch(updateTask).delete(deleteTask);

export default router;
