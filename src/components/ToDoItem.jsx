import { useState } from "react";

function ToDoItem(props){
    const [isEditing,setIsEditing] = useState(false);
    const [editText,setEditText] = useState(props.todo.text)


    const handleSave = () => {
        props.onEdit(props.todo.id, editText);
        setIsEditing(false);
      };
    return (
        <div className={`todo-item ${props.todo.completed ? 'completed' : ''}`}>
            {isEditing ? (
                <>
                <input value={editText} onChange={(e)=>setEditText(e.target.value)}/>
                <button onClick={handleSave}>Save</button>
                </>
            ):
            (
                <>
                    <span onClick={() => props.onToggle(props.todo.id)} className="text">
                        {console.log(props.todo.completed)}
                        {props.todo.text}
                    </span>
                    <div className="actions">
                        <input 
                            type="checkbox" 
                            className="todo-checkbox"
                            checked={props.todo.completed} 
                            onChange={() => props.onToggle(props.todo.id)} 
                        />
                        <button id="edit-btn" onClick={() => setIsEditing(true)}>Edit</button>
                        <button id="del-btn" onClick={() => props.onDelete(props.todo.id)}>Delete</button>
                    </div>
                </>
            )}
        </div>
    )
}
export default ToDoItem;