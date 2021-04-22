import TodoInput from "./components/TodoInput.js"
import TodoList from "./components/TodoList.js"
import TodoListRender from "./components/TodoListRender.js"
import TodoCount from "./components/TodoCount.js"
import TodoFilter from "./components/TodoFilter.js"

const $todoInput = document.querySelector("#new-todo-title");
const $todoList = document.querySelector("#todo-list");
const $todoCount = document.querySelector(".todo-count");
const $todoFilter = document.querySelector(".filters");

const App = (initialState, filterState) => {
    let currentState = initialState;
    let currentFilterState = filterState;
    
    TodoInput({
        $todoInput, 
        onTodoInput: (newTodo) => {
            const nextState = [
                ...currentState,
                {
                    text: newTodo,
                    isCompleted: false
                }
            ];
            setState(nextState, currentFilterState)
        }
    });

    TodoList({
        $todoList,
        onToggle: (index) => {
            const nextState = [...currentState];
            nextState[index] = {
                text: nextState[index].text,
                isCompleted: !nextState[index].isCompleted
            }
            setState(nextState, currentFilterState)
        },
        onRemove: (index) => {
            const nextState = [...currentState];
            nextState.splice(index, 1);
            setState(nextState, currentFilterState);
        },
        onEdit: () => {
            console.log("dbclicked!")
        }
    });

    TodoFilter({
        $todoFilter,
        onFilter: (filter) => {
            const nextFilterState = filter;
            setState(currentState, nextFilterState);
        }
    })
    
    const setState = (nextState, currentFilterState) => {
        currentState = nextState;
        TodoListRender({$todoList, currentState, currentFilterState});
        TodoCount({$todoCount, currentState, currentFilterState});
        localStorage.setItem("derek-todo", JSON.stringify(currentState));
    }
    setState(currentState, currentFilterState);
}

export default App;
