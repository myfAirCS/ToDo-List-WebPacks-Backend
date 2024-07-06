export const changeElementToInputForEdit = (taskId) => {
  const input = document.createElement("input");
  input.type = "text";
  input.value = document.getElementById(`Task-${taskId}`).innerText; // Preserve current task text

  const uneditedTask = input.value;

  input.classList.add("edit-task");
  input.id = `edit-task-${taskId}`;
  // Find the task title element by its ID
  const taskTitle = document.getElementById(`Task-${taskId}`);

  // Replace the task title element with the input field
  taskTitle.replaceWith(input);

  return uneditedTask;
};
