import { changeStatusEventListener } from "../../../Functions/editTask Functionality/edit Status/eventListener/changeStatusEventListener.js";
import { deleteEventListener } from "../../../Functions/deleteTask Functionality/eventListener/deleteEventListener.js";
import { editTaskEventListener } from "../../../Functions/editTask Functionality/edit Task/eventLIstener/editTaskEventListener.js";

export const appendTaskToList = async (Data) => {
  const todoList = document.getElementById("todo-list");
  const div = document.createElement("div");
  const taskId = Data._id;
  div.className = `task`;
  div.innerHTML = `
                    <input type="checkbox" name="taskStatus" id="taskStatus-${taskId}" ${Data.Status ? "checked" : ""}>
                    <p id="Task-${taskId}">${Data.Title}
                    </p>
                    <button data-id="${taskId}" class="dlt-btn" id="dlt-btn-${taskId}"  >&#x2718;</button>
  `;
  todoList.appendChild(div);

  await deleteEventListener(taskId);

  await editTaskEventListener(taskId);

  await changeStatusEventListener(taskId);
};
