import { useRef, useState, useEffect } from 'react'
import './App.css'

function Counter() {
  const [count, setCount] = useState(0);
  const prevCountRef = useRef(0);

  useEffect(() => {
    prevCountRef.current = count;
  }, [count]);

  function add() {
    setCount(prev => prev + 1);
  }

  return (
    <>
      <p>Current value: {count}</p>
      <p>Previous value: {prevCountRef.current}</p>
      <button onClick={add}>Increment</button>
    </>
  )
}

function InputTracker() {
  const [currentText, setCurrentText] = useState('');
  const prevTextRef = useRef('');

  useEffect(() => {
    prevTextRef.current = currentText;
  }, [currentText]);

  function change(e) {
    setCurrentText(e.target.value);
  }

  return (
    <>
      <input type="text" value={currentText} onChange={change} />
      <p>Current text: {currentText}</p>
      <p>Previous text: {prevTextRef.current}</p>
    </>
  )
}

function ClickTracker() {
  
}

function App() {
  return (
    <>
      {/* <Counter /> */}
      {/* <InputTracker /> */}
      <ClickTracker />
    </>
  )
}

export default App;