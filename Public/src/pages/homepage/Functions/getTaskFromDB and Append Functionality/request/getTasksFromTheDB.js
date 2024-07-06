import { getUserIdFromLocalStorage } from "../../../../../utils/getUserIdFromLocalStorage.js";

export const getTasksFromTheDB = async () => {
  const userId = getUserIdFromLocalStorage();

  const options = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  };

  const response = await fetch(
    `http://localhost:3000/api/v1/todo/${userId}/gettasks`,
    options
  );

  const requestedData = await response.json();

  const { data } = requestedData;

  return data;
};
