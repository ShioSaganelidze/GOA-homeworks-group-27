import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Title({title}) {
  return <div>the title is {title}</div>
}

function Profile({username, country}) {
  return <div>the username is {username} and the country is {country}</div>
}

function Price({amount}) {
  return <div>the amount is {amount + 10}</div>
}

function App() {
  return (
    <>
      <Title title={"movie123"}/>
      <Profile username={"jazzlover189"} country={"Australia"} />
      <Price amount={20}/>
    </>
  )
}

export default App
