import { connectDB } from "./Database/DB.js";
import { app } from "./app.js";
import dotenv from "dotenv";

dotenv.config({
  path: "./.env",
});

connectDB().then(() => {
  app
    .listen(process.env.PORT, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    })
    .catch((err) => {
      console.log("MongoDB Connection Failed : ", err.message);
    });
});
