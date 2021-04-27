import TodoInput from "./components/TodoInput.js";
import TodoList from "./components/TodoList.js";
import TodoCount from "./components/TodoCount.js";
import TodoFilter from "./components/TodoFilter.js";

function App() {
  this.data = [];
  this.app = this; // 없애볼까..

  // 컴포넌트 생성
  const todoInput = new TodoInput(this.app);
  const todoList = new TodoList(this.app, this.data);
  const todoCount = new TodoCount(this.app, this.data);
  const todoFilter = new TodoFilter(this.app, this.data);

  this.newTodo = (text) => {
    this.data.push({
      text,
      id: Date.now(), // 숫자가 의미하는 바는?
      completed: false,
    });
    this.setState(this.data);
  };

  this.changeTodo = (editedText, id) => {
    this.data.forEach((todo) => {
      if (todo.id === id) {
        todo.text = editedText;
      }
    });
    this.setState(this.data);
  };

  this.deleteTodo = (deleteId) => {
    const cleanedData = this.data.filter((todo) => todo.id !== deleteId); // 개선하고 싶다..
    this.setState(cleanedData); // 삭제는 잘 되는데 왜 반영이 안될까? 렌더는 계속 돌아가는데 리스트가 멈춘다.
  };

  this.toggleTodo = (toggleId) => {
    this.data.forEach((todo) => {
      if (todo.id === toggleId) {
        todo.completed = !todo.completed;
      }
    });
    this.setState(this.data);
  };

  this.setState = (updatedData) => {
    this.data = updatedData;
    this.render();
    console.log("render!");
  };

  this.render = () => {
    todoList.setState(this.data);
  };
}

export default App;
