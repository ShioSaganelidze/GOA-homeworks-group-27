import { useState } from 'react'
import './App.css'

// HW1:

function Count() {
  const [count, setCount] = useState(0)

  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  )
}

// HW2:

function Text() {
  const [current, setCurrent] = useState('Hello')

  return (
    <button onClick={() => setCurrent(current == 'Hello' ? 'Hello React' : 'Hello React')}>
      {current}
    </button>
  )
}

// HW3:

function ONsOFF() {
  const [off, setOff] = useState('OFF')

  return (
    <button onClick={() => setOff(off == 'OFF' ? 'ON' : 'OFF')}>
      {off} 
    </button>
  )
}

// HW4:

function Input() {
  const [text, setText] = useState('')

  return (
    <>  
      <p>{text}</p>
      <input 
        type="text" 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
      />
    </>
  )
}

// HW5:

function Username() {
  const [username, setUsername] = useState('Default')

  return (
    <>
      <p>Hello, {username}</p>
      <input 
      type="text" 
      value={username} 
      onChange={(e) => setUsername(e.target.value)}
      />
    </> 
  )
}


// Export:

function App() {
  return (
    <div>
      <Count />
      <Text />
      <ONsOFF />
      <Input />
      <Username />
    </div>
  )
}

export default App
