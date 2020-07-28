import React, { useState, useContext } from 'react'
import { CountContext } from '../CountContext'

const Count = (props) => {
  const [count, setCount] = useContext(CountContext)
  return (
    <div>
      <div>{count}</div>
      <button onClick={() => { setCount(count + 1) }}>+</button>
      <button onClick={() => { setCount(count - 1) }}>-</button>
    </div>
  )
}

export default Count