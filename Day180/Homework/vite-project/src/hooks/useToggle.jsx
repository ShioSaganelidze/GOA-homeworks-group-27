import { useState } from "react";

export default function useToggle(initialValue = false) {
    const [bool, setBool] = useState(initialValue);

    function toggle() {
        setBool(prev => !prev)
    }

    return { bool, toggle }
}