import style from "./styles/style.css";

const logInBtn = document.getElementById("Login-btn");
const regBtn = document.getElementById("reg-btn");

logInBtn.addEventListener("click", (event) => {
  event.preventDefault();

  window.location.href = "home.html";
});

regBtn.addEventListener("click", (event) => {
  event.preventDefault();
  window.location.href = "register.html";
});
