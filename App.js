import TodoInput from "./components/TodoInput.js";
import TodoList from "./components/TodoList.js";
import TodoCount from "./components/TodoCount.js";
import TodoFilter from "./components/TodoFilter.js";

function App() {
  this.data = [];
  this.app = this; // 없애볼까..

  // 컴포넌트 생성
  const todoInput = new TodoInput(this.app);
  const todoList = new TodoList(this.data, this.app);
  const todoCount = new TodoCount(this.app, this.data);
  const todoFilter = new TodoFilter(this.app, this.data);

  this.newTodo = (newTodo) => {
    this.data.push({
      text: newTodo,
      id: Date.now(), // 숫자가 의미하는 바는?
      completed: false,
    });
    this.setState(this.data);
  };

  this.changeTodo = (editedText, id) => {
    this.data.forEach((data) => {
      if (data.id === id) {
        data.text = editedText;
      }
    });
    this.setState(this.data);
  };

  this.setState = (updatedData) => {
    this.data = updatedData;
    this.render();
  };

  this.render = () => {
    todoList.setState(this.data);
  };
}

export default App;
