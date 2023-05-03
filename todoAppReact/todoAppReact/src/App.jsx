import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './assets/global.css'
import './Footer.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='todoapp'>
        <h1>
          todos 
        </h1>
        <todoInput/>
      </div>
    </>
  )
}

export default App
