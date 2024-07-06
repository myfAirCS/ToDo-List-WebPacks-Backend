import { getTokenFromLocalStorage } from "../../../../../utils/getTokenFromLocalStorage.js";

export const editTaskRequest = async (taskId, Title) => {
  const { accessToken, refreshToke } = getTokenFromLocalStorage();

  const options = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify({
      Title: Title,
    }),
  };

  const response = await fetch(
    `http://localhost:3000/api/v1/todo/edittask/${taskId}`,
    options
  ).then((data) => {
    return data.json();
  });

  console.log("Edited Res : ", response);

  return response.data;
};
