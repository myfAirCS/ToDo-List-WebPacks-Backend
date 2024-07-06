import { changeTaskStatusRequest } from "../changeTaskStatusRequest.js";

export const changeStatusEventListener = async (taskId) => {
  const Status = document.getElementById(`taskStatus-${taskId}`);

  Status.addEventListener("change", async () => {
    const status = Status.checked;
    if (await changeTaskStatusRequest(taskId, status)) {
      alert("Task Status Changed Successfully");
    } else {
      alert("Request Failed");
    }
  });
};
