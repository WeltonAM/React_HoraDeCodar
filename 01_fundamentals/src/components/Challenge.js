const Challenge = () => {

    const a = 1
    const b = 2

    const sumNums = () => {
        const el = document.getElementById('sum').innerHTML = a + b
    }

    return (
        <div>
            <p>A: {a}</p>
            <p>B: {b}</p>
            <p id="sum"></p>
            <button onClick={sumNums}>Sum</button>
        </div>
    )
}

export default Challenge