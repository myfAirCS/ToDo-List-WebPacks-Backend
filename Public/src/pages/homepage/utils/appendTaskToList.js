export const appendTaskToList = (Data) => {
  const todoList = document.getElementById("todo-list");
  const div = document.createElement("div");
  div.className = `task`;
  div.innerHTML = `
                    <input type="checkbox" name="taskStatus" id="taskStatus" ${Data.Status ? "checked" : ""}>
                    <p>${Data.Title}
                    </p>
                    <button data-id="${Data._id}" class="dlt-btn">&#x2718;</button>
  `;
  todoList.appendChild(div);
};
