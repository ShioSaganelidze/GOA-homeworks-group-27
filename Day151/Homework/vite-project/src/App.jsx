import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// props = თვისებები

// props გამოიყენება იმისთვის რომ მშობელმა ელემენტმა შვილ ელემენტს გადასცეს რაიმე

function Message({text}) {
    return <div>1: message: {text}</div>;
}

function UserInfo({age, name}) {
    return <div>2: name and age is {name}, {age}</div>
}

function Counter({num}) {
    const sum = num + 5;

    return <div>3: The sum is {sum}</div>
}

function App() {
    return (
        <div>
            <Message text="Hello Kocho!" /> 
            <UserInfo name="Shio" age={900} />
            <Counter num={110} />
        </div>
    );
}

export default App;