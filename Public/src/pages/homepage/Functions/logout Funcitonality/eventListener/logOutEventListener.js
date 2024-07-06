import { logoutFunction } from "../logoutFunction.js";

export const logOutEventListener = async () => {
  const logoutBtn = document.getElementById("logout-btn");
  logoutBtn.addEventListener("click", async (event) => {
    event.preventDefault();
    const success = await logoutFunction();
    if (success) {
      window.location.href = "login.html";
    }
  });
};
