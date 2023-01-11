import { useState } from 'react'

const ConditionalRender = () => {

    const [x] = useState(false)

    const [name, setName] = useState("Karla")

    return (
        <div>
            <div>
                <h3>Who will be render?</h3>
                {x && <p>If 'x' is true, me!</p>}
                {!x && <p>If 'x' is false, mee!</p>}
            </div>
 
            <div>
                {name === "Juliana" ? (
                    <div>
                        <p>The name is {name}</p>
                    </div>
                ) : (
                    <div>
                        <p>Name not found</p>
                    </div>
                )}
                <button onClick={() => setName("Juliana")}>Change name</button>
            </div>

        </div>
    )
}

export default ConditionalRender