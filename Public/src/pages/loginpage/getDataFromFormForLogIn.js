export const getDataFromFormForLogIn = () => {
  const email = document.getElementById("login-email");
  const password = document.getElementById("login-password");
  const emailValue = email.value;
  const passwordValue = password.value;
  if ([passwordValue, emailValue].some((field) => field.trim() == ""))
    throw new Error("Field Can't be Empty");
  const data = {
    email: emailValue,
    password: passwordValue,
  };

  return data;
};
