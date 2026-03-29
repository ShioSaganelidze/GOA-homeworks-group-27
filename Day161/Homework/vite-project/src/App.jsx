import { useState, useId } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Change() {
  const [inp, setInp] = useState("")

  return (
    <>
      <input type="text" value={inp} placeholder='any text' onChange={
        e => setInp(e.target.value)
      } />
      <p>{inp || 'Type something'}</p>
    </>
  )
}

function Email() {
  const [txt, setTxt] = useState("")

  const Submit = (e1) => {
    e1.preventDefault()
    console.log(txt)
  }

  return (
    <form onSubmit={Submit}>
      <input type="email" placeholder='email' onChange={
        e => setTxt(e.target.value)
      } required/> <br /> <br />

      <button type='submit'>Submit</button>
    </form>
  )
}

function Login() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")



  const Submit = (e2) => {
    e2.preventDefault()
    console.log(username, password)
  }



  return (
      <form onSubmit={Submit}>
        <input type="text" placeholder='username' onChange={
          e => setUsername(`Username: ${e.target.value};`)
        } required/> <br /> <br />


        <input type="password" placeholder='password' onChange={
          e => setPassword(`Password: ${e.target.value};`)
        } required/> <br /> <br />


        <input id='agree' type="checkbox" required />
        <label htmlFor="agree">by agreeing u agree to my rules</label>
        <br /> <br />


        <button type='submit'>Submit</button>
      </form>
  )

}

function App() {

  return (
    <>
      <Change /> <hr /> <br />
      <Email /> <hr /> <br />
      <Login />
    </>
  )
}

export default App
