import React, { useState } from 'react'
import './Counter.css'
const Counter2b = () => {

  const[count,setCount]= useState(0)
  function updateCounter(value)
  {
    setCount(count+value)
  }

  
  return (
    <>
    <button className="inc-btn" onClick={()=>updateCounter(1)}>Increment By 1</button>
    <button className="inc-btn" onClick={()=>updateCounter(2)}>Increment By 2</button>
    <button className="inc-btn" onClick={()=>updateCounter(3)}>Increment By 3</button>

    <button className="dec-btn" onClick={()=>updateCounter(-1)}>Deccrement By 1</button>
    <button className="dec-btn" onClick={()=>updateCounter(-2)}>Decrement By 2</button>
    <button className="dec-btn" onClick={()=>updateCounter(-3)}>Decrement By 3</button>
    <br/>
    <br/>
    <span>{count}</span>
    </>
  )
}

export default Counter2b