export const clearFormFields = () => {
  const email = document.getElementById("reg-email");
  const fullName = document.getElementById("reg-fullName");
  const username = document.getElementById("reg-username");
  const password = document.getElementById("reg-password");

  email.value = "";
  fullName.value = "";
  username.value = "";
  password.value = "";
};
