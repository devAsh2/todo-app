import { useState } from 'react';
import Header from './components/Header';
import ToDoList from './components/ToDoList';
import './App.css';

function App() {
  const [todos, setTodos] = useState([])//setting empty todo list using use state hook
  const [input,setInput] = useState('')

  const handleAdd = (e)=>{
    e.preventDefault();
    if(!input.trim) return;
    setTodos([...todos,{id:Date.now,text:input,completed:false}]);
    setInput('');
  }
  const toggleTask = (id)=>{
    setTodos(todos.map((todo)=>{
      return id==todo.id?{...todo,completed:!todo.completed}:todo
    }))
  }
  const deleteTask = (id)=>{
    setTodos(todos.filter((todo)=>todo.id!=id))
  }
  const editText = (id,newText)=>{
    setTodos(todos.map(todo=>todo.id==id?{...todo,text:newText}:todo))
  }

  return (
    <div className='container'>
      <Header/>
      <form onSubmit={handleAdd}>
        <input value={input} onChange={(e)=>setInput(e.target.value)}/>
        <button type='submit'>Add task</button>
      </form>
      {/*Passing the state and functions as props */}
      <ToDoList
      todos={todos}
      onToggle={toggleTask}
      onDelete={deleteTask}
      onEdit={editText}
      />
    </div>
  )
}

export default App
