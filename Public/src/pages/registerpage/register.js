import "./register.css";
import { clearFormFields } from "./utils/clearFormFields.js";
import { postDataForRegistration } from "./utils/postDataForRegistration.js";

document
  .getElementById("login-page-link")
  .addEventListener("click", (event) => {
    event.preventDefault();
    window.location.href = "login.html";
  });

document.getElementById("reg-btn").addEventListener("click", async (event) => {
  event.preventDefault();
  const success = await postDataForRegistration();
  if (success) {
    clearFormFields();
    window.location.href = "login.html";
  }
});
