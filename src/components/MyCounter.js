import React from 'react'
import { useCounter } from '../contexts/CounterContext'

const MyCounter = () => {
  const {counter,inc,dec} = useCounter()
  return (
    <div>
      Counter is: {counter}
      <button onClick={inc}>INC</button>
      <button onClick={dec}>DEC</button>
    </div>
  )
}

export default MyCounter
