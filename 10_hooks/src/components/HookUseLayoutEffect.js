import {useLayoutEffect, useEffect, useState} from 'react'

const HookUseLayoutEffect = () => {

    const [name, setName] = useState("Name")

    useEffect(() => {
        console.log("2")
        setName("Change Name")
    }, [])

    useLayoutEffect(() => {
        console.log("1")

        setName("Another name")
    }, [])

    console.log(name)

  return (
    <div>
        <h2>useLayoutEffect</h2>
        <p>Name: {name}</p>
        <hr />
    </div>
  )
}

export default HookUseLayoutEffect