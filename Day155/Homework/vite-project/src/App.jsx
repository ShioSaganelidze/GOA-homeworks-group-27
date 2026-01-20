import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Counter() {
  let [count, setCount] = useState(0)
  
  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(count = 0)}>Reset</button>
      <button onClick={() => setCount(count === count + 0 ? null : count + 0)}>Show/Hide</button>
      <input type="text" />
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
