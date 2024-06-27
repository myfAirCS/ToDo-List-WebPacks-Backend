import "./register.css";

const loginPageLink = document.getElementById("login-page-link");
const regBtn = document.getElementById("reg-btn");
loginPageLink.addEventListener("click", (event) => {
  event.preventDefault();
  window.location.href = "login.html";
});

regBtn.addEventListener("click", (event) => {
  event.preventDefault();
  window.location.href = "login.html";
});
