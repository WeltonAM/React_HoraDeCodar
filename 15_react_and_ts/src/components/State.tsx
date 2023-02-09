import React, { useState, ChangeEvent } from 'react'

const State = () => {
    
    const [text, setText] = useState<string | null>("Testing hook")

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value)
    }

    return (
        <div>
            <p>The text is: {text}</p>
            <input type="text" onChange={handleChange} />
        </div>
    )
}

export default State