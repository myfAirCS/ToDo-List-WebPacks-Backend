export const deleteTaskFromTheList = (taskId) => {
  const taskTitle = document.getElementById(`Task-${taskId}`);
  const parentDiv = taskTitle.parentElement;
  parentDiv.remove();
  return true;
};
