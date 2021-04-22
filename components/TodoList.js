const TodoList = ({$todoList, onToggle, onRemove, onEdit}) => {
    $todoList.addEventListener("click", (e) => {
        const idx = parseInt(e.target.closest('li').dataset.index);
        if(e.target.className === "toggle") {
            onToggle(idx);
        }
        else if(e.target.className === "destroy") {    
            onRemove(idx);
        }
    })

    $todoList.addEventListener("dblclick", (e) => {
        if(e.target.classList.contains("label")) {
            e.target.closest('li').classList.toggle("editing");
        }
        onEdit();
    })
}

export default TodoList;
