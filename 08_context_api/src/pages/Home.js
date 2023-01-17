import ChangeCounter from '../components/ChangeCounter'
// import { useContext } from 'react'
// import { CounterContext } from '../context/CounterContext'

import { useCounterContext } from '../hooks/useCounterContext'
import { useTitleColorContext } from '../hooks/useTitleColorContext'

const Home = () => {

  // const { counter } = useContext(CounterContext)
  const { counter } = useCounterContext()
  const { color, dispatch } = useTitleColorContext()

  const setTitleColor = (color) => {
    dispatch({ type: color})
  }

  return (
    <div>
      
      <h3 style={{color: color}}>Home</h3>
      
      <p>Counter value = {counter}</p>
      
      <ChangeCounter />
      
      <div>
        <button onClick={() => setTitleColor("RED")}>Red</button>  
        <button onClick={() => setTitleColor("BLUE")}>Blue</button>  
      </div>

    </div>
  )
}

export default Home