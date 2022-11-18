import React from 'react'
import { useCounter } from '../contexts/CounterContext'

const ComponentA = () => {
  const { counter } = useCounter()
  return (
    <div>
      <h1>ComponentA</h1>
      Counter is {counter}
      <h1>ComponentA End</h1>
    </div>
  )
}

export default ComponentA
