import { getDataFromFormForRegisteration } from "./getDataFromFormForRegisteration.js";

export async function postDataForRegistration() {
  const data = getDataFromFormForRegisteration();

  try {
    const response = await fetch("http://localhost:3000/api/v1/user/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: data.email,
        password: data.password,
        username: data.username,
        fullName: data.fullName,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Registration Failed");
    }

    console.log("success");
    alert("Registration Successful");
    return true;
  } catch (error) {
    console.error("Error during registration:", error.message);
    alert("Error during registration:", error.message);
    return false;
  }
}
