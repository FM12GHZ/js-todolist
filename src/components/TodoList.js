import keyCodes from "../constant/keyCode.js"

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
    })

    $todoList.addEventListener("keydown", (e) => {
        if(e.keyCode === keyCodes.escape) {
            $todoList.childNodes.forEach(i => {
                i.classList.remove("editing")
            })
        }
    })

    $todoList.addEventListener("keydown", (e) => {
        if(e.keyCode === keyCodes.enter) {
            const idx = parseInt(e.target.closest('li').dataset.index);
            onEdit(e.target.value, idx);
        }
    })
}

export default TodoList;
