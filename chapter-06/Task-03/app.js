// Define UI Vars
const form = document.querySelector("#task-form");
const taskInput = document.querySelector("#task");
const filter = document.querySelector("#filter");
const taskList = document.querySelector(".list-group");
const clearBtn = document.querySelector(".clear-tasks");

// Load all event listeners
loadEventListeners();

function loadEventListeners() {
  // DOM Load event
  document.addEventListener("DOMContentLoaded", getTasks);

  // Add task event
  form.addEventListener("submit", addTask);

  // Remove task event
  taskList.addEventListener("click", removeTask);

  // Edit task event
  taskList.addEventListener("click", editTask);

  // Clear task
  clearBtn.addEventListener("click", clearTask);

  // Filter task
  filter.addEventListener("keyup", filterTask);
}

// Add task
function addTask(e) {
  if (taskInput.value === "") {
    alert("You should enter task and then click on Add task button.");
  } else {
    // Create li element
    const li = document.createElement("li");
    // Add class
    li.className = "list-group-item d-flex align-items-center";
    // Create text node and append to li
    const span = document.createElement("span");
    span.className = "textContent";
    li.appendChild(span);
    span.appendChild(document.createTextNode(taskInput.value));

    // Create first i element
    const iTime = document.createElement("i");
    // Add class
    iTime.className = "fas fa-times text-danger ml-auto delete-item";
    // Append the i to li
    li.appendChild(iTime);

    // Append li to ul
    taskList.appendChild(li);

    // Create second i element
    const iPen = document.createElement("i");
    // Add class
    iPen.className = "fas fa-pen text-primary ml-2 pen-item";
    // Append the i to li
    li.appendChild(iPen);

    // Append li to ul
    taskList.appendChild(li);

    // Store in LS
    storeTaskInLocalStorage(taskInput.value);

    // Clear input
    taskInput.value = "";

    e.preventDefault();
  }
}

// Remove task
function removeTask(e) {
  if (e.target.classList.contains("delete-item")) {
    if (confirm("Are you sure for removing task?")) {
      e.target.parentElement.remove();
      // Remove from LS
      removeTaskFromLocalStorage(e.target.parentElement);
    }
  }
}

// Edit task
function editTask(e) {
  if (e.target.classList.contains("pen-item")) {
    const li = e.target.parentElement;
    e.target.className = "fas fa-bookmark text-primary ml-2 bookmark-item";
    
    const span = li.firstElementChild;
    span.setAttribute("contenteditable", true);
    span.focus();
    const oldTask = e.target.parentElement.firstElementChild.textContent;

    // span.addEventListener('DOMSubtreeModified', (e)=>{
    //   console.log('Hello');
    // })
    
    span.addEventListener("focusout", () => {
      span.blur();
      span.setAttribute("contenteditable", false);
      e.target.className = "fas fa-pen text-primary ml-2 pen-item";
      const newTask = e.target.parentElement.firstElementChild.textContent;

      let arrayTask = JSON.parse(localStorage.getItem("tasks"));
      const idx = arrayTask.indexOf(oldTask);
      if (idx !== -1) {
        arrayTask[idx] = newTask;
      }
      localStorage.setItem("tasks", JSON.stringify(arrayTask));
    });
  }
  
}

// Clear task
function clearTask() {
  taskList.innerHTML = "";
  // Clear from LS
  clearTasksFromLocalStorage();
}

// Filter task
function filterTask(e) {
  const text = e.target.value.toLowerCase();
  // console.log(text);

  document.querySelectorAll(".list-group-item").forEach(function (task) {
    // console.log(task);
    const item = task.textContent;
    // console.log(item);

    if (item.toLowerCase().indexOf(text) != -1) {
      task.classList.add("d-flex");
    } else {
      task.classList.remove("d-flex");
      task.style.display = "none";
    }
  });
}

// Store Task
function storeTaskInLocalStorage(task) {
  // console.log(task);

  let tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }

  tasks.push(task);

  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Get Tasks from LS
function getTasks() {
  let tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }

  tasks.forEach(function (task) {
    // Create li element
    const li = document.createElement("li");
    // Add class
    li.className = "list-group-item d-flex align-items-center";
    // Create text node and append to li
    // li.appendChild(document.createTextNode(task));

    const span = document.createElement("span");
    span.className = "textContent";
    li.appendChild(span);
    span.appendChild(document.createTextNode(task));

    // Create first i element
    const iTime = document.createElement("i");
    // Add class
    iTime.className = "fas fa-times text-danger ml-auto delete-item";
    // Append the i to li
    li.appendChild(iTime);

    // Append li to ul
    taskList.appendChild(li);

    // Create second i element
    const iPen = document.createElement("i");
    // Add class
    iPen.className = "fas fa-pen text-primary ml-2 pen-item";
    // Append the i to li
    li.appendChild(iPen);

    // Append li to ul
    taskList.appendChild(li);
  });
}

//  Remove from LS
function removeTaskFromLocalStorage(taskItem) {
  let tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }

  tasks.forEach(function (task, index) {
    if (taskItem.textContent === task) {
      tasks.splice(index, 1);
    }
  });

  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Clear Tasks from LS
function clearTasksFromLocalStorage() {
  localStorage.clear();
}
