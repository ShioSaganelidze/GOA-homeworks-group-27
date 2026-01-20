import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { use } from 'react'

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log('Component mounted')
  }, [])

  useEffect(() => {
    document.title = 'My First useEffect'
  }, [])

  useEffect(() => {
    console.log(`The count changed`)
  }, [count])

  useEffect(() => {
      setTimeout(() => {
      console.log('Hello world after 2s')
    }, 2000)
  }, [])

  useEffect(() => {
    console.log('Component mounted')

    return(() => {
      console.log('Component unmounted')
    })
  }, [])

  return (
    <>
      <button onClick={() => setCount(count + 1)}>
        {count}
      </button>
    </>
  )
}

export default App
