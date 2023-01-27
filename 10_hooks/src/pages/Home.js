import React from 'react'
import HookUseEffect from '../components/HookUseEffect'
import HookUseReducer from '../components/HookUseReducer'
import HookUseState from '../components/HookUseState'
import HookUseRef from '../components/HookUseRef'

import { useContext } from 'react'
import { SomeContext } from '../components/HookUseContext'
import HookUseCallback from '../components/HookUseCallback'
import HookUseMemo from '../components/HookUseMemo'
import HookUseLayoutEffect from '../components/HookUseLayoutEffect'
import HookUseImperativeHandle from '../components/HookUseImperativeHandle'

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

      <HookUseCallback />

      <HookUseMemo />

      <HookUseLayoutEffect />

      <HookUseImperativeHandle />
    </div>
  )
}

export default Home