const TodoListRender = ({$todoList, currentState, currentFilterState}) => {
    if(currentFilterState === "all") {
        currentState = currentState
    } else if(currentFilterState === "active") {
        currentState = currentState.filter(todo => todo.isCompleted === false)
    } else {
        currentState = currentState.filter(todo => todo.isCompleted === true)
    }
    $todoList.innerHTML = currentState.map(
        (todo, index) => `<li data-index="${index}" class="${todo.isCompleted ? `completed` : `false`}">
                            <div class="view">
                                <input class="toggle" type="checkbox" id="${index}" ${todo.isCompleted ? "checked" : "false"}>
                                <label class="label">${todo.text}</label>
                                <button class="destroy" id="${index}"></button>
                            </div>
                            <input class="edit" value="${todo.text}">
                        </li>`
    ).join("")
}

export default TodoListRender;
