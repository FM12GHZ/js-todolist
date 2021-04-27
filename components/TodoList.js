function TodoList(data, app) {
  const $todoList = document.querySelector(".todo-list");

  // 개선이 필요해 보인다. 삭제시 렌더가 작동 안함..
  this.render = () => {
    $todoList.innerHTML = data
      .map((todo) => {
        return `
        <li class="${todo.completed ? `completed` : ""} " id=${todo.id}>
          <div class="view">
            <input class="toggle" type="checkbox" ${
              todo.completed ? `checked` : ""
            }/>
            <label class="label">${todo.text}</label>
            <button class="destroy"></button>
          </div>
          <input class="edit" value="${todo.text}" />
        </li>`;
      })
      .join(""); // join 메서드 사용처 정리
  };

  // editMode, editTodo 따로 선언한 이유 : e가 다르다 (<label>, <input>)
  this.editMode = (e) => {
    if (e.target.className === "label") {
      e.target.closest("li").classList.add("editing"); // closest 정리
    }
  };
  $todoList.addEventListener("dblclick", this.editMode); // EL 위치 몰아서 통일 가능?

  this.editTodo = (e) => {
    if (e.target.className === "edit") {
      const editedText = e.target.value;
      const id = Number(e.target.closest("li").id); // li.id == string 조심

      if (e.key === "Enter") {
        app.changeTodo(editedText, id); // newTodo는 변경이 아닌 추가이기에 쓸 수 없다
      } else if (e.key === "Escape") {
        e.target.closest("li").classList.remove("editing");
      }
    }
  };
  $todoList.addEventListener("keydown", this.editTodo);

  this.deleteTodo = (e) => {
    const deleteId = Number(e.target.closest("li").id);
    if (e.target.className === "destroy") {
      app.deleteTodo(deleteId);
    }
  };
  $todoList.addEventListener("click", this.deleteTodo);

  this.setState = (newData) => {
    this.data = newData;
    this.render();
  };

  this.render();
}
export default TodoList;
