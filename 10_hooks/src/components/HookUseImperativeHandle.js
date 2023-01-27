import { useRef } from 'react'

import SomeComponent from './SomeComponent'

const HookUseImperativeHandle = () => {

    const compRef = useRef()

    return (
        <div>
            <h2>useImperativeHandle</h2>

            <SomeComponent ref={compRef} />

            <button onClick={() => compRef.current.validate()}>Validate</button>

            <hr />
        </div>
    )
}

export default HookUseImperativeHandle