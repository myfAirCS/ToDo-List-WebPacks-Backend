import style from "./styles/style.css";
import { getTokenFromLocalStorage } from "./utils/getTokenFromLocalStorage.js";

const logInBtn = document.getElementById("Login-btn");
const regBtn = document.getElementById("reg-btn");

logInBtn.addEventListener("click", (event) => {
  event.preventDefault();
  const tokens = getTokenFromLocalStorage();
  console.log(tokens);
  if (!tokens) {
    window.location.href = "login.html";
  } else {
    alert("You Are Already Logged In");
    window.location.href = "home.html";
  }
});

regBtn.addEventListener("click", (event) => {
  event.preventDefault();
  window.location.href = "register.html";
});
