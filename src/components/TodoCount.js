const TodoCount = ({$todoCount, currentState, currentFilterState}) => {
    let todoCount = 0;
    switch(currentFilterState) {
        case "active":
            todoCount = currentState.filter(todo => !todo.isCompleted).length;
            break;
        case "completed":
            todoCount = currentState.filter(todo => todo.isCompleted).length;
            break;
        default:
            todoCount = currentState.length
    }
    $todoCount.innerText = todoCount;
}

export default TodoCount;
