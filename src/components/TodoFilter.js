const TodoFilter = ({$todoFilter, onFilter}) => {
    $todoFilter.addEventListener("click", (e) => {
        $todoFilter.querySelectorAll("a").forEach(aTag => {
            if(aTag.classList.contains("selected")){
                aTag.classList.remove("selected");
            }
        })
        onFilter(e.target.className);
        e.target.classList.add("selected");
    })
}

export default TodoFilter;
