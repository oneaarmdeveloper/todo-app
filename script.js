const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const taskForm = document.getElementById("taskForm");

// Add Task Function
function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  // Create a new list item
  const li = document.createElement("li");
  li.textContent = taskText;

  // Add a delete button to the list item
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.addEventListener("click", () => {
    taskList.removeChild(li);
  });

  li.appendChild(deleteBtn);
  taskList.appendChild(li);

  // Clear the input field
  taskInput.value = "";
}

// Event Listeners
addTaskBtn.addEventListener("click", addTask);

// Prevent form submission and add task on Enter
taskForm.addEventListener("submit", (e) => {
  e.preventDefault();
  addTask();
});
