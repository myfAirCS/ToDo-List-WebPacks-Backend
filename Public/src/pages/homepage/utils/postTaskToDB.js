import { getTokenFromLocalStorage } from "../../../utils/getTokenFromLocalStorage.js";
import { getTaskFromInputField } from "./getTaskFromInputField.js";
export const postTaskToDB = async () => {
  const { accessToken, refreshToken } = getTokenFromLocalStorage();

  try {
    const task = getTaskFromInputField();
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        Title: task,
        AccessToken: accessToken,
        RefreshToken: refreshToken,
      }),
    };

    const response = await fetch(
      "http://localhost:3000/api/v1/todo/addtask",
      options
    ).then((data) => {
      return data.json();
    });

    const { data } = await response;
    console.log(data);

    return data;
  } catch (error) {
    console.error("Error : ", error.message);
    alert("Error : ", error.message);
  }
};
