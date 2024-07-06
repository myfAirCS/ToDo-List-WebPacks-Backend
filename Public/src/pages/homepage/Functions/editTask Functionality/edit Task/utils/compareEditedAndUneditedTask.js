export const compareEditedAndUneditedTask = (editedTask, uneditedTask) => {
  if (uneditedTask.trim() == editedTask.trim()) {
    return true;
  }
  return false;
};
