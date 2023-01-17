import React from 'react'
import { useCounterContext } from '../hooks/useCounterContext'

const About = () => {
  
  const {counter} = useCounterContext()

  return (
    <div>
      <h3>About</h3>
      <p>Counter value = {counter}</p>
    </div>
  )
}

export default About