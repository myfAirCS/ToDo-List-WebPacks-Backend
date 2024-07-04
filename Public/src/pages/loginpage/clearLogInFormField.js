export const clearLogInFormField = () => {
  const email = document.getElementById("login-email");
  const password = document.getElementById("login-password");
  email.value = "";
  password.value = "";
};
