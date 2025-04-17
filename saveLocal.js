import { render } from "./render.js";
import { myTodoList } from "./main.js";

export function getData(key) {
  let data = localStorage.getItem(key);
  if (data) {
    myTodoList.length = 0;
    myTodoList.push(...JSON.parse(data));

    render();
  } else {
    myTodoList.length = 0;
    myTodoList.push({
      title: "my todo",
      des: "task created",
      duedate: "2025-10-01",
      priority: "low",
      checked: true,
    });
    saveData("tasklist", myTodoList);
    render();
  }
  console.log(data);
}

export function saveData(key, value) {
  return localStorage.setItem(key, JSON.stringify(value));
}
