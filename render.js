import { myTodoList } from "./main.js";

//render the todo list
export function render() {
  let list = document.querySelector(".list");
  list.innerHTML = "";

  for (let i = 0; i < myTodoList.length; i++) {
    let task = myTodoList[i];

    let todoEl = document.createElement("div");
    todoEl.classList.add("card");
    todoEl.style = `${
      task.checked ? "text-decoration: line-through; color:red;" : ""
    }`;
    todoEl.innerHTML = `
    <div class="task inp">
    <input type="checkbox" class="checkbox" onclick="completed(${i})" ${
      task.checked ? "checked" : ""
    }/>
      </div>
      <div class="task title">
      <h4>${task.title}</h4>
      </div>
      <div class="task des">
      <p>${task.des}</p>
      </div>
      <div class="task due">
      <p>${task.duedate} due</p>  
      </div>
      <div class="task prior">
      <p>${task.priority} priority</p>
      </div>
      
     
      <div class="f-btn task">
      <button class="t-btn" onclick="edit(${i})">Edit
      </button>
      <button class="t-btn" onclick="remove(${i})">
        Remove
      </button>
      </div>
      </div>`;

    list.append(todoEl);
  }
}
