import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Todos() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then(res => res.json())
      .then(data => {
        setTodos(data)
        setLoading(false)
      })
      .catch(err => {
        console.log(`Unexpected error has occured: ${err}`)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return <h1>loading...</h1>
  }

  return (
    <>
      <h1>Todos</h1>
      {todos.map((todo, i) => (
        <p key={todo.id}>{i + 1}. {todo.title}</p>
      ))}

    </>
  )
}

function Posts() {
  const [show, setShow] = useState(true) // ✅ initialize as true
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => {
        setPosts(data.slice(0, 5)) // first 5 posts only
        setLoading(false)
      })
      .catch(err => {
        console.log(`An error has occurred: ${err}`)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return <p>loading...</p>
  }

  return (
    <>
      <h1>Posts</h1>
      <button onClick={() => setShow(!show)}>
        {show ? "Hide Posts" : "Show Posts"}
      </button>

      {show && posts.map(post => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </>
  )
}

function App() {
  return (
    <>
      <Todos />
      <Posts />
    </>
  )
}

export default App
