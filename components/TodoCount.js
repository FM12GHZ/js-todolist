function TodoCount(app, data) {
  let $count = document.querySelector(".todo-count strong");

  this.totalCount = () => {
    const state = document.querySelector("a.selected").classList[0];

    switch (state) {
      case "active":
        $count.innerText = data.filter((todo) => !todo.completed).length;
        break;
      case "completed":
        $count.innerText = data.filter((todo) => todo.completed).length;
        break;
      default:
        $count.innerText = data.length;
    }
  };

  this.setState = () => {
    this.totalCount();
  };
}

export default TodoCount;
