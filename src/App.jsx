import { useState } from 'react';
import Header from './components/Header';
import ToDoList from './components/ToDoList';
import './App.css';

function App() {
  const [todos, setTodos] = useState([])//setting empty todo list using use state hook

  return (
    <>
      <h1>its todo app</h1>
    </>
  )
}

export default App
