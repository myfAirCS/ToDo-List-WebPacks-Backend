import { appendTaskToList } from "../../utils/List Functionality/appendTask/appendTaskToList.js";
import { getTasksFromTheDB } from "../getTaskFromDB and Append Functionality/request/getTasksFromTheDB.js";

export const getTasksFromDBandAppend = async () => {
  const taskArray = await getTasksFromTheDB();

  const todoList = document.getElementById("todo-list");
  todoList.innerHTML = "";

  taskArray.forEach((Object) => {
    appendTaskToList(Object);
  });
};
