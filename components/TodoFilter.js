function TodoFilter(app) {
  const $filter = document.querySelector(".filters");
  const $$filterBtn = $filter.querySelectorAll("a");

  this.filterTodo = (e) => {
    $$filterBtn.forEach((btn) => {
      btn.classList.toggle("selected", btn == e.target);
    });
    app.filterTodo(e.target.classList[0]); // 상태 알아내는 것 이게 최선일까?
  };
  $filter.addEventListener("click", this.filterTodo);
}

export default TodoFilter;
