import { useReducer, useState } from 'react'
import './App.css'

const reducer  = (state, action) => {
  switch(action.type) {
    case 'ADD_TASK': return [...state, {
      id: Date.now(),
      text: action.payload,
      completed: false
    }]
    case 'TOGGLE_TASK': return state.map((e, i) => {
      if (e.id == action.payload) {
        return {
          ...e, completed: !e.completed
        }
      } else {
        return e
      }
    })
    case 'DELETE_TASK': return state.filter((e, i) => {
      if (e.id == action.payload) {
        return false
      } else {
        return true
      }
    })
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, [])
  const [inp, setInp] = useState('')



  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch({
      type: 'ADD_TASK',
      payload: inp
    })
  }


  return (
    <>
      <form onSubmit={handleSubmit}>

        <input value={inp} onChange={
          e => setInp(e.target.value)
        } type="text" />

        <button type='submit'>Add</button>
      </form>

      <ul>
        {state.map(task => (
          <li key={task.id} style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
            {task.text}
            <button onClick={
              () => dispatch(
                {
                  type: 'DELETE_TASK',
                  payload: task.id
                }
              )
            }>X</button>
            <button onClick={
              () => dispatch(
                {
                  type: 'TOGGLE_TASK',
                  payload: task.id
                }
              )
            }>{task.completed ? 'Undo' : 'Done'}</button>
          </li>
        ))}
      </ul>
    </>

  )
}

export default App