import { useContext } from 'react'
import { SomeContext } from '../components/HookUseContext'

const About = () => {

  const { contextValue } = useContext(SomeContext)

  return (
    <div>
      <h2>About</h2>
      <p>UseContext: {contextValue}</p>
      <hr />
    </div>
  )
}

export default About