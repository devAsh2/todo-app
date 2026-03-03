import { useState } from "react";
function ToDoItem(props){
    const [isEditing,setIsEditing] = useState(false);
    const [editText,setEditText] = useState(props.todo.text)


    const handleSave = () => {
        props.onEdit(props.todo.id, editText);
        setIsEditing(false);
      };
    return (
        <div className="todo-item">
            {isEditing ? (
                <>
                <input value={editText} onChange={(e)=>setEditText(e.target.value)}/>
                <button onClick={handleSave}>Save</button>
                </>
            ):
            (
                <>
                    <span onClick={() => props.onToggle(props.todo.id)} className="todo-text">
                        {console.log(props.todo.completed)}
                        {props.todo.text}
                    </span>
                    <div className="actions">
                        <button onClick={() => setIsEditing(true)}>Edit</button>
                        <button onClick={() => props.onDelete(props.todo.id)}>Delete</button>
                    </div>
                </>
            )}
        </div>
    )
}
export default ToDoItem;