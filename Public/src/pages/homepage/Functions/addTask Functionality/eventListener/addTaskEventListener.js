import { addTaskFunctionality } from "../addTaskFunctionality";

export const addTaskEventListener = async () => {
  const addBtn = document.getElementById("add-btn");
  addBtn.addEventListener("click", async (event) => {
    event.preventDefault();
    await addTaskFunctionality();
  });
};
