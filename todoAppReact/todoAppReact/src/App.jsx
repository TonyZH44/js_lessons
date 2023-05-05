import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './assets/global.css'
import TodoFooter from './TodoFooter.jsx'
import TodoInput from './TodoInput.jsx'
import TodoList from './TodoList'
import TodoItem from './TodoItem'

export default function App() {

  const [tasks, setTasks] = useState([]);

  //let taskArr = [];
  //TodoItem("test", Date.now())

  function addTask(e) {

    if (!(e.key === "Enter" || e.key === null)) return null;

    let text = e.target.value;
    e.target.value = "";
    if (text)
      setTasks([...tasks, TodoItem(Date.now(), text)]);
    
  }

  return (

    <div className='todoapp'>

      <header className="header">
        <h1>todos</h1>
        <TodoInput 
          onBlur={addTask}
          onKeyDown={addTask}
        />
      </header>
      <TodoList
        taskList = {tasks}
      />
      <TodoFooter />
    </div>

  );
}

