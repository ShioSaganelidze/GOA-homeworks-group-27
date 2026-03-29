import './App.css'
import useToggle from './hooks/useToggle'

function UseToggle() {
  const [bool, setBool] = useToggle()

  return (
    <>
      <button onClick={setBool}>Click</button>
      <p>{bool ? 'true' : 'false'}</p>
    </>
  )
}

function App() {
  return (
    <UseToggle />
  )
}

export default App
