import { Router } from "express";
import {
  logInUser,
  logoutUser,
  registerUser,
} from "../controllers/users.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/register").post(registerUser);
router.route("/login").post(logInUser);
//Secured Route
router.route("/logout").post(verifyJWT, logoutUser);

export default router;
