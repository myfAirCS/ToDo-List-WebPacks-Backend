import { appendTaskToList } from "./appendTaskToList.js";
import { getTasksFromTheDB } from "./getTasksFromTheDB.js";

export const appendingTaskAfterUserLogsIn = async () => {
  const taskArray = await getTasksFromTheDB();
  taskArray.forEach((Object) => {
    appendTaskToList(Object);
  });
};
