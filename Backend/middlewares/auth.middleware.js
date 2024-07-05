import { apiError } from "../utils/apiError.js";
import { asyncWrapper } from "../utils/asyncWrapper.js";
import jwt from "jsonwebtoken";
import { User } from "../models/users.model.js";

export const verifyJWT = asyncWrapper(async (req, _, next) => {
  const token =
    req.body?.AccessToken ||
    req.header("Authorization")?.replace("Bearer ", "").trim() ||
    req.cookies.AccessToken;
  if (!token) throw new apiError("Cookies Not Found", 403);

  const decodedToken = await jwt.verify(token, process.env.JWT_SECRET_ACCESS);

  if (!decodedToken) throw new apiError("Unauthorized Request", 403);

  const user = await User.findById(decodedToken._id);

  if (!user) throw new apiError("Expired Token", 403);

  req.user = user;

  next();
});
