const tasks = [

];

const taskList = document.getElementById("taskList");
const addTask = document.getElementById("addTaskBtn");
const newTaskNameI = document.getElementById("nameInput");
const newTaskDateI = document.getElementById("dateInput");

renderTasks();


addTask.onclick = function() {
  const newTaskName = newTaskNameI.value;
  const newTaskDate = newTaskDateI.value;

  if (newTaskName == "" || newTaskDate == "") {
    return
  }

  const newTask = {
     title: newTaskName, dueDate: newTaskDate, completed: false
    };

  tasks.push(newTask);
  newTaskNameI.value = "";
  newTaskDateI.value = "";
  renderTasks();
}

function renderTasks() {

    taskList.innerHTML = "";

  if (tasks.length === 0) {
  taskList.innerHTML = "<p>No tasks yet!</p>";
  return;
  }

  tasks.forEach((task, index) => {
    const div = document.createElement("div");
    div.classList.add("task");

    const left = document.createElement("div");
    left.textContent = `${task.title} - ${task.dueDate}`;

    const right = document.createElement("div");
    right.classList.add("rightSide");

    const comp = document.createElement("input");
    comp.type = "checkbox";
    comp.checked = task.completed;
    comp.classList.add("checkbox");

    if (task.completed) {
      left.classList.add("taskComplete");
    }

    comp.onchange = function () {
      task.completed = comp.checked;
      renderTasks();
    };

    const del = document.createElement("button");
    del.textContent = "X";
    del.classList.add("deleteBtn");

    del.onclick = function () {
      tasks.splice(index, 1);
      renderTasks();
    };

    right.appendChild(comp);
    right.appendChild(del);

    div.appendChild(left);
    div.appendChild(right);

    taskList.appendChild(div);
  });
}