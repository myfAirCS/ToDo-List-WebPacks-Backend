import "./login.css";

import { postDataForLogIn } from "./postDataForLogIn.js";
import { clearLogInFormField } from "./clearLogInFormField.js";

document
  .getElementById("login-btn")
  .addEventListener("click", async (event) => {
    event.preventDefault();

    const success = await postDataForLogIn();

    if (success) {
      clearLogInFormField();
      window.location.href = "home.html";
    }
  });
document.getElementById("reg-page-link").addEventListener("click", (event) => {
  event.preventDefault();
  window.location.href = "register.html";
});
