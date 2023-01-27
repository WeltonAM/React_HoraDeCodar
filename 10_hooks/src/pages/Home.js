import React from 'react'
import HookUseEffect from '../components/HookUseEffect'
import HookUseReducer from '../components/HookUseReducer'
import HookUseState from '../components/HookUseState'
import HookUseRef from '../components/HookUseRef'

import { useContext } from 'react'
import { SomeContext } from '../components/HookUseContext'

const Home = () => {

  const { contextValue } = useContext(SomeContext)

  return (
    <div>
      <HookUseState />
      
      <HookUseReducer />
      
      <HookUseEffect />
      
      <h2>UseContext</h2>
      
      <p>Context Value: {contextValue}</p>
      
      <hr />

      <HookUseRef />
    </div>
  )
}

export default Home