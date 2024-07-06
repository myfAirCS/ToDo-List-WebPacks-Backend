import { deleteTaskAndSendRequest } from "../deleteTaskAndSendRequest";

export const deleteEventListener = async (taskId) => {
  document
    .getElementById(`dlt-btn-${taskId}`)
    .addEventListener("click", async (event) => {
      event.preventDefault();
      await deleteTaskAndSendRequest(taskId);
    });
};
