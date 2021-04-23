const TodoCount = ({$todoCount, currentState, currentFilterState}) => {
    let todoCount = 0;
    if(currentFilterState === "all") {
        todoCount = currentState.length
    } else if (currentFilterState === "active") {
        todoCount = currentState.filter(todo => todo.isCompleted === false).length
    } else {
        todoCount = currentState.filter(todo => todo.isCompleted === true).length
    }
    $todoCount.innerHTML = `총 <strong>${todoCount}</strong> 개`;
}

export default TodoCount;
