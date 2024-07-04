import express, { json } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(
  json({
    limit: "16kb",
    urlencoded: true,
  })
);

app.use(cookieParser());

//Importing Routes

import userRouter from "./routes/user.routes.js";
import todoRouter from "./routes/todo.routes.js";

app.use("/api/v1/user", userRouter);
app.use("/api/v1/todo", todoRouter);

export { app };
