import React, { useContext } from 'react'
import { AppContext } from '../App'

const Context = () => {

    const details = useContext(AppContext)
    
    return (
        <>
         {details && (
            <div>
                <h2>Language: {details.language}</h2>
                <h4>FW: {details.framework}</h4>
                <p>Qty: {details.projects}</p>
            </div>
         )}   
        </>
    )
}

export default Context