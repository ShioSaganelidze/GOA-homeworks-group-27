import { useState } from 'react'
import './App.css'

function Homework1() {
    const [vis, setVis] = useState(false)

    const togVis = () => {
        setVis(!vis)
    };

    
    return (
        <>
            <button onClick={togVis}>{vis ? "Hide" : "Show"}</button>
            <p>{vis ? "Hello world" : ""}</p>
        </>
    )
};

function Homework2() {
    const [isTrue, setIsTrue] = useState(false)

    const togIsTrue = () => {
        setIsTrue(!isTrue)
    }

    return (
        <>
            <button onClick={togIsTrue}>{isTrue ? "Hide" : "Show"}</button>
            <input type="password" />
        </>
    )
}

export default {Homework1, Homework2}
