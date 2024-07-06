import "./register.css";
import { postDataForRegistration } from "./Functions/Request/postDataForRegistration.js";
import { clearFormFields } from "./utils/clearFormFields.js";

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
