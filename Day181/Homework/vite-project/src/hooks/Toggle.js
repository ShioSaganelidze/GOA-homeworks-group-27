import { useState } from "react";

export default function useToggle(initialValue = false) {
    const [state, setBool] = useState(initialValue);

    const toggle = () => setBool(prev => !prev)

    return { state, toggle }
}