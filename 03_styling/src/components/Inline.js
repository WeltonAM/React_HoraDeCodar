import { useState } from 'react'

const Inline = () => {

    const [n] = useState(15)

    return (
        <div>
            <hr />
            <h3>Inline css</h3>

            <p style={{ color: 'blue', backgroundColor: 'yellow', height: '40px' }}>Styled inline</p>

            <p style={n < 10 ? ({ color: 'purple' }) : ({ color: 'pink' })}>Dynamic css n {'>'} 10</p>
            <p style={n > 10 ? ({ color: 'purple' }) : ({ color: 'pink' })}>Dynamic css n {'<'} 10</p>
        </div>
    )
}

export default Inline