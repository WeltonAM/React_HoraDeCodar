import { useState } from "react"

const ManageData = () => {

    let someData = 10

    const [number, setNumber] = useState(15);

    return (
        <div>
            <div>
                <p>Value: {10}</p>
                <button onClick={() => (someData = 15)}>Change</button>
            </div>
            
            <div>
                <p>Value: {number}</p>
                <button onClick={() => (setNumber(25))}>Change</button>
            </div>
        </div>
    )
}

export default ManageData