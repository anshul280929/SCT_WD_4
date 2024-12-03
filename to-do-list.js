document.getElementById("add-task-btn").addEventListener("click", addTask);

function addTask() {
  const taskInput = document.getElementById("task-input");
  const taskDateTime = document.getElementById("task-datetime");
  const taskList = document.getElementById("task-list");

  const taskText = taskInput.value.trim();
  const taskDateTimeValue = taskDateTime.value;

  if (taskText === "" || taskDateTimeValue === "") {
    alert("Please enter a task and set a date/time!");
    return;
  }

  const li = document.createElement("li");
  li.className = "task-item";

  li.innerHTML = `
    <span>
      <strong>${taskText}</strong><br>
      <small>${new Date(taskDateTimeValue).toLocaleString()}</small>
    </span>
    <div class="task-actions">
      <button class="complete-btn">✔</button>
      <button class="edit-btn">✎</button>
      <button class="delete-btn">🗑</button>
    </div>
  `;

  // Mark as completed
  li.querySelector(".complete-btn").addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  // Edit task
  li.querySelector(".edit-btn").addEventListener("click", () => {
    const newTaskText = prompt("Edit your task:", taskText);
    const newTaskDateTime = prompt("Edit date/time (YYYY-MM-DDTHH:mm):", taskDateTimeValue);

    if (newTaskText && newTaskDateTime) {
      li.querySelector("strong").textContent = newTaskText;
      li.querySelector("small").textContent = new Date(newTaskDateTime).toLocaleString();
    }
  });

  // Delete task
  li.querySelector(".delete-btn").addEventListener("click", () => {
    li.remove();
  });

  taskList.appendChild(li);

  // Clear inputs
  taskInput.value = "";
  taskDateTime.value = "";
}
