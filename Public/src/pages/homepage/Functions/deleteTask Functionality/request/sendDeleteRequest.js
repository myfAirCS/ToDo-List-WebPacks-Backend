import { getTokenFromLocalStorage } from "../../../../../utils/getTokenFromLocalStorage";

export const sendDeleteRequest = async (taskId) => {
  const { accessToken, refreshToken } = getTokenFromLocalStorage();
  const options = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    credentials: "include",
  };

  const response = await fetch(
    `http://localhost:3000/api/v1/todo/deletetask/${taskId}`,
    options
  ).then((Data) => {
    return Data.json();
  });

  console.log("res : ", response);
  if (!response.success) {
    alert("Failed To Delete");
    return;
  }

  return true;
};
