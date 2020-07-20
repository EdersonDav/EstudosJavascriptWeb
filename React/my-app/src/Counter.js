import React, { useState, useEffect } from 'react'

const Counter = (props) => {

  const [count, setCount] = useState(props.count)

  useEffect(() => {
    setCount(Number(localStorage.getItem("count")));
    return () => {
      console.log("Not count");
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("count", count)
  }, [count])

  function add() {
    setCount(count + 1);
  }
  return (
    <div>
      <h1>Counter : {count}</h1>
      <button onClick={add}>Add</button>
    </div>
  )
}
export default Counter;