function TodoInput(app) {
  const $todoInput = document.querySelector(".new-todo");

  this.addTodo = (e) => {
    const todoText = e.target.value;
    app.newTodo(todoText);
    e.target.value = "";
  };
  // this의 원리와 EL에서 this는 원래 뭐였지
  // change가 값이 있을 때, 엔터 누르면 동작하는 이벤트인데 완전 적합하다고 볼 수 있을까?
  $todoInput.addEventListener("change", this.addTodo);
}

export default TodoInput;
