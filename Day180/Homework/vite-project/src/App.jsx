import useCounter from './hooks/useCounter'
import useToggle from './hooks/useToggle'
import './App.css'

function Counter() {
  const {state, increment, decrement} = useCounter(0)

  return (
    <>
      <p>{state}</p>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
    </>
    
  )
}

function Toggle() {
  const {bool, toggle} = useToggle(false)

  return (
    <>
      <p>{`${bool}`}</p>
      <button onClick={toggle}>toggle</button>
    </>
  )
}

function App() {

  return (
    <>
      <Counter /> <br />
      <Toggle />
    </>
  )
}

export default App
