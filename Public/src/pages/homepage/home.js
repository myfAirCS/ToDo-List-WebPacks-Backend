import "./home.css";
import { addTaskFunctionality } from "./utils/addTaskFunctionality.js";
import { appendingTaskAfterUserLogsIn } from "./utils/appendingTaskAfterUserLogsIn.js.js";
import { logoutFunction } from "./utils/logoutFunction.js";
const addBtn = document.getElementById("add-btn");
const logoutBtn = document.getElementById("logout-btn");

document.addEventListener("DOMContentLoaded", async () => {
  await appendingTaskAfterUserLogsIn();
});
logoutBtn.addEventListener("click", (event) => {
  event.preventDefault();
  if (logoutFunction()) {
    window.location.href = "login.html";
  }
});
addBtn.addEventListener("click", async (event) => {
  event.preventDefault();
  await addTaskFunctionality();
});
