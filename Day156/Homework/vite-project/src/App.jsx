import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Counter() {
  const [count, setCount] = useState(0)
  const [off, setOff] = useState('OFF')
  const [random, setRandom] = useState(0)
  
  return (
    <>
      <p>Cookies: {count}</p>
      <button onClick={() => setCount(count + 1)}>Click</button>
      <button>Show/Hide</button>
      <button onClick={() => setOff(off == 'OFF' ? 'ON' : 'OFF')}>
        {off} 
      </button>
      <p></p>
      <button onClick={() => {

      }}></button>
    </>
  )
}

function App() {
  return (
    <>
      <Counter />
    </>
  )
}

export default App
