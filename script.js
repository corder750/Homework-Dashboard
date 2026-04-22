const tasks = [
  { title: "Bio HW", dueDate: "2026-04-23", completed: false },
  { title: "Math Worksheet", dueDate: "2026-04-25", completed: false },
  { title: "History Map", dueDate: "2026-04-15", completed: true }
];

const taskList = document.getElementById("taskList");

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