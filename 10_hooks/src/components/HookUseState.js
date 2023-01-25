import { useState } from 'react'

const HookUseState = () => {

    // useState
    let userName = "Juliana"

    const [name, setName] = useState("Karla")

    const changeNames = () => {
        userName = "Juliana Crespo"

        setName("Karla de Lima")
    }

    // useState and input
    const [age, setAge] = useState(18)

    const handleSubmit = (e) => {
        e.preventDefault()

        console.log(age)
    }


    return (
        <div>
            <hr />

            <h3>UseState</h3>
            
            <p>Variable: {userName}</p>
            
            <p>UseState: {name}</p>

            <button onClick={changeNames}>Change</button>
            
            <hr />

            <h3>UseState and inputs</h3>
            
            <form onSubmit={handleSubmit}>
                <input type="text" value={age} onChange={(e) => setAge(e.target.value)} />
                <input type="submit" value="Send" />
            </form>

            <p>Variable changed: {age}</p>
            
            <hr />
        </div>
    )
}

export default HookUseState