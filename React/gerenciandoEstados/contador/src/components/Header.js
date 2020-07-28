import React, { useState, useContext } from 'react'
import { CountContext } from '../CountContext'

const Header = (props) => {
  const [count, setCount] = useContext(CountContext)
  return (
    <div className="Header">
      <h2>Contagem</h2>
      <div>{count}</div>
    </div>
  )
}

export default Header