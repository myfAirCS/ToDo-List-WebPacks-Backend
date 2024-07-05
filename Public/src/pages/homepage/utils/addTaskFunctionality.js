import { appendTaskToList } from "./appendTaskToList";
import { clearTaskInputField } from "./clearTaskInputField";
import { postTaskToDB } from "./postTaskToDB";

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
