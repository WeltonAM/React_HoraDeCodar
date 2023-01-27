import { useEffect, useState } from "react"

const HookUseEffect = () => {

  useEffect(() => {
    console.log("Being executed");
  })

  const [number, setNumber] = useState(1)

  const changeSomething = () => {
    setNumber(number + 1)
  }

  useEffect(() => {
    console.log("Empty array, executing once")
  }, [])

  const [anotherNumber, setAnotherNumber] = useState(0)

  useEffect(() => {

    if (anotherNumber) {
      console.log("Executed by another number change");
    }
  }, [anotherNumber])

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("New!")

      setAnotherNumber(anotherNumber + 1)
    }, 2000)

    return () => clearTimeout(timer)

  }, [anotherNumber])

  return (
    <div>
      <h2>useEffect</h2>
      <p>Number: {number}</p>
      <button onClick={changeSomething}>Execute</button>

      <br />

      <p>Another number: {anotherNumber}</p>
      <button onClick={() => setAnotherNumber(anotherNumber + 1)}>Change another number</button>

      <hr />
    </div>
  )
}

export default HookUseEffect