const TodoListRender = ({$todoList, currentState, currentFilterState}) => {
    switch(currentFilterState) {
        case "active":
            currentState = currentState.filter(todo => !todo.isCompleted);
            break;
        case "completed":
            currentState = currentState.filter(todo => todo.isCompleted);
            break;
    }

    $todoList.innerHTML = currentState.map(
        (todo, index) => `<li data-index="${index}" class="${todo.isCompleted ? `completed` : `false`}">
                            <div class="view">
                                <input class="toggle" type="checkbox" id="${index}" ${todo.isCompleted && "checked"}>
                                <label class="label">${todo.text}</label>
                                <button class="destroy" id="${index}"></button>
                            </div>
                            <input class="edit" value="${todo.text}">
                        </li>`
    ).join("")
}

export default TodoListRender;
