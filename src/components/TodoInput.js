import keyCodes from "../constant/keyCode.js"

const TodoInput = ({$todoInput, onTodoInput}) => {
    $todoInput.addEventListener("keydown", (e) => {
        if(e.keyCode == keyCodes.enter) {
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
