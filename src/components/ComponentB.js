import React from 'react'
import { useCounter } from '../contexts/CounterContext'
import ComponentC from './ComponentC'

const ComponentB= () => {
  const { counter,inc } = useCounter()
  return (
    <div>
      <h1>ComponentB</h1>
    Counter is:{counter}
      <button onClick={inc}>INC</button>
      <h1>ComponentBEnd</h1>
      <ComponentC/>
    </div>
  )
}

export default ComponentB
