import { useState } from "react";

export default function useCounter(initialValue = 0) {
    const [state, setState] = useState(initialValue);

    function increment() {
        setState(prev => prev + 1)
    }

    function decrement() {
        setState(prev => prev - 1)
    }

    return { state, increment, decrement}
}