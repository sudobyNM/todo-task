const addBtn = document.querySelector(".add-todo");
const todoForm = document.querySelector("#new-todo");

import { getData, saveData } from "./saveLocal.js";
import { render } from "./render.js";
import { completed } from "./listFunc.js";
import { edit } from "./listFunc.js";
import { remove } from "./listFunc.js";

window.completed = completed;
window.edit = edit;
window.remove = remove;

addBtn.addEventListener("click", addTodo);

export function addTodo() {
  todoForm.style.display = "flex";
}

todoForm.addEventListener("submit", ff);

export function ff(e) {
  e.preventDefault();
  addTask();
  todoForm.style.display = "none";
  todoForm.reset();
}

export let myTodoList = [
  {
    title: "todo eg.",
    des: "todo task created",
    duedate: "2025-10-01",
    priority: "low",
    checked: true,
  },
];

//get data from local storage
getData("tasklist");

// function to create a new todo object
function Todo(title, des, duedate, priority, checked) {
  this.title = title;
  this.des = des;
  this.duedate = duedate;
  this.priority = priority;
  this.checked = checked;
}

// function to add a new task
function addTask() {
  let title = document.querySelector("#title").value;
  let des = document.querySelector("#des").value;
  let duedate = document.querySelector("#due-date").value;
  let priority = document.querySelector("#priority").value;
  let checked = false;

  let newlist = new Todo(title, des, duedate, priority, checked);

  myTodoList.push(newlist);
  render();
  saveData("tasklist", myTodoList);
}
