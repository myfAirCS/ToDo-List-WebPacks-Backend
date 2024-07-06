export const changeElementBackToNormal = (taskId) => {
  const input = document.getElementById(`edit-task-${taskId}`);

  const p = document.createElement("p");
  p.textContent = input.value;
  p.id = `Task-${taskId}`;
  const editedTask = p.textContent;
  input.replaceWith(p);

  return editedTask;
};
