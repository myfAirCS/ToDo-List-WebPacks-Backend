import { appendTaskToList } from "../../utils/List Functionality/appendTask/appendTaskToList.js";
import { clearTaskInputField } from "../../utils/clearInputField/clearTaskInputField.js";
import { postTaskToDB } from "./request/postTaskToDB.js";

export const addTaskFunctionality = async () => {
  try {
    const data = await postTaskToDB();

    if (!data) {
      throw new Error("Failed To Get Data");
    }
    appendTaskToList(data);
    clearTaskInputField();
  } catch (error) {
    console.error("Error : ", error.message);
    throw new Error(error.message);
  }
};
