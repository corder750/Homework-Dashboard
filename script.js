const tasks = [

];

const taskList = document.getElementById("taskList");
const addTask = document.getElementById("addTaskBtn");
const newTaskNameI = document.getElementById("nameInput");
const newTaskDateI = document.getElementById("dateInput");

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
  renderTasks();
}

function renderTasks() {
  taskList.innerHTML = "";

  tasks.forEach(task => {
  const div = document.createElement("div");
  div.textContent = `${task.title} - ${task.dueDate}`;
  div.classList.add("task");

  const comp = document.createElement("input");
  comp.type = "checkbox";
  comp.checked = task.completed;
  
  if (task.completed) {
    div.classList.add("taskComplete");
  }

  comp.onchange = function() {
    task.completed = comp.checked;
    if (comp.checked){
        div.classList.add("taskComplete");
    } else {
        div.classList.remove("taskComplete");
    }
  }

  div.appendChild(comp);
  taskList.appendChild(div);
});
}