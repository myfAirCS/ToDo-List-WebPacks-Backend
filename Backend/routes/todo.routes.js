import { Router } from "express";
import {
  addTask,
  editTask,
  changeTaskStatus,
  deleteTask,
} from "../controllers/todo.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/addtask").post(verifyJWT, addTask);
router.route("/edittask").patch(verifyJWT, editTask);
router.route("/changetaskstatus").patch(verifyJWT, changeTaskStatus);
router.route("/deletetask").delete(verifyJWT, deleteTask);

export default router;
