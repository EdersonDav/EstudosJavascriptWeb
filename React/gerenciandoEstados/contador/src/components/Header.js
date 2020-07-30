import React, { useState, useContext } from 'react'
//import { CountContext } from '../CountContext'
import { useSelector, DispatchProp } from 'react-redux'

const Header = (props) => {
  //const [count, setCount] = useContext(CountContext)
  const counter = useSelector((state) => { return state })
  return (
    <div className="Header">
      <h2>Contagem</h2>
      <div>{counter}</div>
    </div>
  )
}

export default Header