import { $, $$ } from "../src/util/querySelector.js";
import CreateTodo from "./components/CreateTodo.js";
import DeleteTodo from "./components/DeleteTodo.js";
import EditTodo from "./components/EditTodo.js";
import FilterTodo from "./components/FilterTodo.js";
import CheckTodo from "./components/CheckTodo.js";

class App {
  constructor() {
    this.$newTodo = $("#new-todo-title");
    this.$todoList = $("#todo-list");
    this.$filters = $(".filters");

    this.createTodo = new CreateTodo(this.$newTodo, this.loadTodo);
    this.deleteTodo = new DeleteTodo(this.$todoList, this.loadTodo);
    this.editTodo = new EditTodo(this.$todoList, this.loadTodo);
    this.filterTodo = new FilterTodo(this.$filters, this.updateTodo);
    this.checkTodo = new CheckTodo(this.$todoList, this.loadTodo);

    this.loadTodo();
  }

  loadTodo = () => {
    this.todos = JSON.parse(localStorage.getItem("todos")) ?? [];
    this.updateTodo(this.todos);
  };

  updateTodo = (todos) => {
    this.$todoList.innerHTML = "";
    todos.forEach((todo) =>
      this.$todoList.insertAdjacentHTML(
        "beforeend",
        this.todoItemTemplate(todo)
      )
    );
    this.updateTodoCount(todos);
  };

  todoItemTemplate = (todo) => {
    return ` <li id=${todo.id} class=${todo.completed && "completed"}>
            <div class="view">
              <input 
                class="toggle" 
                type="checkbox" 
                id=${todo.id}
                ${todo.checked && "checked"}>
              <label class="label">${todo.content}</label>
              <button class="destroy" id=${todo.id}></button>
            </div>
            <input class="edit" value=${todo.content}>
          </li>`;
  };

  updateTodoCount(todos) {
    const todoCount = $("strong");
    todoCount.innerText = todos.length;
  }
}

window.onload = () => {
  new App();
};
