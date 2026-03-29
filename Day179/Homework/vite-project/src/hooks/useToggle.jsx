import { useState } from 'react'

export default function useToggle(initialvalue = false) {
    const [value, setValue] = useState(initialvalue)

    const toggle = () => {
        setValue(!value)       
    }

    return [value, toggle]
}
