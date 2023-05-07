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

  let taskArr = tasks.map((item, index) => (
    //console.log(item),
    <TodoItem
      id={index}
      text={item.text}
      completed={item.completed}
      onToggle={onToggle}
      onDestroy={destroy}
      />
  ));
  

  function destroy(e){
    //console.log("destroy");
    
    //console.log(e.target.id);
    const copy = [...tasks]
    copy.splice(e.target.id, 1);
    setTasks(copy);
    //console.log(newTasks);
    //console.log(tasks);
    
  }


  function onToggle(e){
    //console.log(e.target.id);
    //console.log(tasks[e.target.id])
    const copyArr = [...tasks];
    copyArr[e.target.id].completed = !copyArr[e.target.id].completed;
    setTasks(copyArr);
    
  }
  

  function addTask(e) {

    if (!(e.key === "Enter" || e.key === null)) return null;

    let text = e.target.value;
    //console.log(text);
    e.target.value = "";
    if (text)
      setTasks([...tasks, {id: Date.now()*Math.random(),completed: false, text: text}]);
    //console.log(tasks);
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
        taskList = {taskArr}
      />
      <TodoFooter />
    </div>

  );
}

