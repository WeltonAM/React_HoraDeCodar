import React from 'react'
import { useCounterContext } from '../hooks/useCounterContext'

const Contact = () => {
  
  const {counter} = useCounterContext()

  return (
    <div>
      <h3>Contact</h3>
      <p>Counter value = {counter}</p>
    </div>
  )
}

export default Contact