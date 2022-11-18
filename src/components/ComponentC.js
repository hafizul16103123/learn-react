import React from 'react'
import { useCounter } from '../contexts/CounterContext'

const ComponentC = () => {
  const {dec} =useCounter()
  return (
    <div>
      <h1>ComponentC</h1>
      <button onClick={dec}>DEC</button>
      <h1>ComponentC End</h1>
    </div>
  )
}

export default ComponentC
