import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './assets/global.css'
import './Footer.jsx'

function App() {
  

  return (
    <div>
			<header className="header">
				<h1>todos</h1>
				{todoInput}
			</header>
		</div>
  )
}

export default App
