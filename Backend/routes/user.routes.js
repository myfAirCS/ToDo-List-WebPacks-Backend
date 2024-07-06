import { Router } from "express";
import {
  logInUser,
  logoutUser,
  registerUser,
  verifyUser,
} from "../controllers/users.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/register").post(registerUser);
router.route("/login").post(logInUser);
//Secured Route
router.route("/logout").post(verifyJWT, logoutUser);
router.route("/verifyuser").get(verifyJWT, verifyUser);

export default router;
