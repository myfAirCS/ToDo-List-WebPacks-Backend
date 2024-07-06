import { getTokenFromLocalStorage } from "../../../../../utils/getTokenFromLocalStorage.js";

export const changeTaskStatusRequest = async (taskId, Status) => {
  const { accessToken, refreshToken } = getTokenFromLocalStorage();

  console.log("Stat : ", Status);

  const options = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify({
      Status: `${Status}`,
      AccessToken: accessToken,
      RefreshToken: refreshToken,
    }),
  };

  const response = await fetch(
    `http://localhost:3000/api/v1/todo/changetaskstatus/${taskId}`,
    options
  ).then((data) => {
    return data.json();
  });

  console.log("Res : ", response);

  if (response.success) {
    return response;
  }
};
