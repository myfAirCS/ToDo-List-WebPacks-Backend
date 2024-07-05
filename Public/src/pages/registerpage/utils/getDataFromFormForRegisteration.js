export const getDataFromFormForRegisteration = () => {
  const email = document.getElementById("reg-email");
  const fullName = document.getElementById("reg-fullName");
  const username = document.getElementById("reg-username");
  const password = document.getElementById("reg-password");

  if (
    [email.value, fullName.value, password.value, username.value].some(
      (field) => field == ""
    )
  ) {
    alert("All fields are required");

    throw new Error("All fields are required");
  } else {
    const data = {
      email: email.value,
      fullName: fullName.value,
      password: password.value,
      username: username.value,
    };

    console.log(data);

    return data;
  }
};
