import React, { useState, useContext } from 'react'
// import { CountContext } from '../CountContext'
import { useSelector, useDispatch } from 'react-redux'

const Count = (props) => {
  // const [count, setCount] = useContext(CountContext)
  const counter = useSelector((state) => { return state })
  const dispatch = useDispatch()
  return (
    <div>
      <div>{counter}</div>
      {/* <button onClick={() => { setCount(count + 1) }}>+</button>
      <button onClick={() => { setCount(count - 1) }}>-</button> */}
      <button onClick={() => { dispatch({ type: "INCREMENT" }) }}>+</button>
      <button onClick={() => { dispatch({ type: "DECREMENT" }) }}>-</button>
    </div>
  )
}

export default Count