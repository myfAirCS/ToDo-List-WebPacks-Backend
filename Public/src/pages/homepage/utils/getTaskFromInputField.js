export const getTaskFromInputField = () => {
  const taskInputField = document.getElementById("task-input");
  const Title = taskInputField.value;
  if (Title.trim() == "") {
    alert("Please enter a task");
  } else {
    return Title;
  }
};
