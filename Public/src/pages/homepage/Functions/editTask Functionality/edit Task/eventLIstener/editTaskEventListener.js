import { compareEditedAndUneditedTask } from "../utils/compareEditedAndUneditedTask.js";
import { changeElementToInputForEdit } from "../utils/changeElementToInputForEdit.js";
import { changeElementBackToNormal } from "../utils/changeElementBackToNormal.js";
import { editTaskRequest } from "../editTaskRequest.js";
import { getTasksFromDBandAppend } from "../../../../Functions/getTaskFromDB and Append Functionality/getTasksFromDB-AndAppend.js";

export const editTaskEventListener = async (taskId) => {
  document
    .getElementById(`Task-${taskId}`)
    .addEventListener("dblclick", async () => {
      const uneditedTask = changeElementToInputForEdit(taskId);

      document
        .getElementById(`edit-task-${taskId}`)
        .addEventListener("blur", async () => {
          const editedTask = changeElementBackToNormal(taskId);
          if (compareEditedAndUneditedTask(editedTask, uneditedTask)) {
            return;
          } else {
            const responsedData = await editTaskRequest(taskId, editedTask);
            if (responsedData) {
              await getTasksFromDBandAppend();
            }
          }
        });
    });
};
