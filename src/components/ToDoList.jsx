import ToDoItem from "./TodoItem";
function ToDoList(props){
    return (
        <div className="todo-list">
            {
                props.todos.map((todo)=>{
                    return (
                    <ToDoItem
                    key={todo.id}
                    todo={todo}
                    onToggle={props.onToggle}
                    onDelete={props.onDelete}
                    onEdit={props.onEdit}
                    />
                )
                })
            }
        </div>
    )
}
export default ToDoList;