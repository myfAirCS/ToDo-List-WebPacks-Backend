import "./home.css";
import { getTokenFromLocalStorage } from "../../utils/getTokenFromLocalStorage.js";
import { getTasksFromDBandAppend } from "./Functions/getTaskFromDB and Append Functionality/getTasksFromDB-AndAppend.js";
import { userVerificationRequestUsingTokens } from "./utils/userVerification Using Tokens/userVerificationRequestUsingTokens.js";
import { removeValuesFormLocalStorage } from "../../utils/removeValuesFromLocalStorage.js";
import { addTaskEventListener } from "./Functions/addTask Functionality/eventListener/addTaskEventListener.js";
import { logOutEventListener } from "./Functions/logout Funcitonality/eventListener/logOutEventListener.js";

await addTaskEventListener();

await logOutEventListener();
document.addEventListener("DOMContentLoaded", async () => {
  const { accessToken, refreshToken } = getTokenFromLocalStorage();
  if (!(accessToken || refreshToken)) {
    alert("You are Not Logged In");
    window.location.href = "login.html";
    return;
  }
  await getTasksFromDBandAppend();
});
window.addEventListener("load", async () => {
  const verify = await userVerificationRequestUsingTokens();

  if (!verify) {
    removeValuesFormLocalStorage();
    window.location.href = "login.html";
  }
});
