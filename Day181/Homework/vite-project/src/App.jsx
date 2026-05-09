import { useState } from 'react'
import './App.css'
import useCounter from './hooks/Counter'
import useToggle from './hooks/Toggle';

function Toggle() {
  const { state, toggle } = useToggle();
  
  return (
    <>
      <button onClick={toggle}>Toggle</button>
      <p>{state ? 'ON' : 'OFF'}</p>
    </>
  )
}

function Counter() {
  const { count, increment, decrement } = useCounter(0);

  return (
    <>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      <p>The count is: {count}</p>
    </>
  )
}

function App() {
  // code

  return (
    <>
      <Counter />
      <Toggle />
    </>
  )
}

export default App
