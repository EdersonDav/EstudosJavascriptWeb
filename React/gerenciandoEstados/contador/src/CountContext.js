import React, { useState, createContext } from 'react'

export const CountContext = createContext();

export const CountProvider = (props) => {
  const [count, setCount] = useState(0)
  return (
    <CountContext.Provider value={[count, setCount]}>
      {props.children}
    </CountContext.Provider>
  )
}