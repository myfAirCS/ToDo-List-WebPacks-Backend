import { deleteTaskFromTheList } from "../../utils/List Functionality/deleteTask/deleteTaskFromTheList.js";
import { sendDeleteRequest } from "./request/sendDeleteRequest.js";

export const deleteTaskAndSendRequest = async (taskId) => {
  const response = await sendDeleteRequest(taskId);
  console.log(response);
  if (!response) {
    alert("Request Failed");
    return;
  }
  const success = await deleteTaskFromTheList(taskId);
  if (success) alert("Task Deleted Succesfully From The List");
};
