import { saveData } from "./saveLocal.js";
import { render } from "./render.js";
import { myTodoList } from "./main.js";

const todoForm = document.querySelector("#new-todo");
const clearBtn = document.querySelector(".clear");
let closeBtn = document.querySelector(".close");

closeBtn.addEventListener("click", closeForm);

export function closeForm(e) {
  e.preventDefault();

  todoForm.style.display = "none";
  saveData("tasklist", myTodoList);
  render();
}

let updateBtn = document.querySelector(".b1");
updateBtn.addEventListener("click", updateTask);

export function updateTask() {
  updateBtn.setAttribute("value", "Add Todo");
  closeBtn.style.display = "block";
}

// clear all tasks from the list
clearBtn.addEventListener("click", clearAll);
export function clearAll() {
  let TodoList = [
    {
      title: "my todo",
      des: "task created",
      duedate: "2025-10-01",
      priority: "low",
      checked: true,
    },
  ];

  myTodoList.length = 0;
  myTodoList.push(...TodoList);

  saveData("tasklist", myTodoList);
  render();
}

// mark a task as completed
export function completed(index) {
  myTodoList[index].checked = !myTodoList[index].checked;

  saveData("tasklist", myTodoList);
  render();
}

// edit a task
export function edit(index) {
  let task = myTodoList[index];
  document.querySelector("#title").value = task.title;
  document.querySelector("#des").value = task.des;
  document.querySelector("#due-date").value = task.duedate;
  document.querySelector("#priority").value = task.priority;
  myTodoList.splice(index, 1);
  todoForm.style.display = "flex";

  let updateBtn = document.querySelector(".b1");
  updateBtn.setAttribute("value", "Update Task");

  let closeBtn = document.querySelector(".close");
  closeBtn.style.display = "none";

  saveData("tasklist", myTodoList);
  render();
}

// remove a task from the list
export function remove(index) {
  myTodoList.splice(index, 1);
  render();
  saveData("tasklist", myTodoList);
}
