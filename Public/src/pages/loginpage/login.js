import "./login.css";

const regPageLink = document.getElementById("reg-page-link");

regPageLink.addEventListener("click", (event) => {
  event.preventDefault();
  window.location.href = "register.html";
});
