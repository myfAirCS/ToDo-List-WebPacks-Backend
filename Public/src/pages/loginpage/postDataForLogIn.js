import { getDataFromFormForLogIn } from "./getDataFromFormForLogIn.js";
export const postDataForLogIn = async () => {
  const data = getDataFromFormForLogIn();

  const response = await fetch("http://localhost:3000/api/v1/user/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: data.email,
      username: data.email,
      password: data.password,
    }),
  });

  if (!response.ok) {
    const errorData = await response;

    console.log(errorData.message);

    alert(errorData.message || "Error While Logging In Try Again");

    throw new Error(errorData.message || "Error While Logging In Try Again");
  }

  const responseData = await response.json();

  console.log(responseData);

  alert("Logged In Successfully");

  return true;
};
