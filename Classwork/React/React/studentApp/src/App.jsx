import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Student from './student.jsx'

function App() {
  const [count, setCount] = useState(0)
  const fname = "Aayan"
  const age = 20

  return (
    <>
      <h1>Welcome to React {fname}</h1>
      <h2>Age: {age}</h2>
      <Student name={fname} age={age} />
      </>
  )
  
}

export default App
