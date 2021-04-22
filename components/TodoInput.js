const ENTER_KEY = 13;

const TodoInput = ({$todoInput, onTodoInput}) => {
    $todoInput.addEventListener("keydown", (e) => {
        if(e.keyCode == ENTER_KEY) {
            if(e.target.value.length > 0) {
                onTodoInput(e.target.value);
                e.target.value = ""
            }
            else {
                alert("input Todo.")
            }
        }    
    })
}

export default TodoInput;
