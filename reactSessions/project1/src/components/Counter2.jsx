import React, { useState } from 'react'
import './Counter.css'
const Counter2 = () => {

  const[count,setCount]= useState(0)
  function incrementBy1()
  {
    setCount(count+1)
  }

  function incrementBy2()
  {
    setCount(count+2)
  }

  function incrementBy3()
  {
    setCount(count+3)
  }
  
  return (
    <>
    <button onClick={incrementBy1}>Increment By 1</button>
    <button onClick={incrementBy2}>Increment By 2</button>
    <button onClick={incrementBy3}>Increment By 3</button>
    <span>{count}</span>
    </>
  )
}

export default Counter2