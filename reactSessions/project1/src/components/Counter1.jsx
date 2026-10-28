import React, { useState } from 'react'
import './Counter.css'
const Counter1 = () => {

  const[count,setCount]= useState(0)
  
  return (
    <>
    <button onClick={()=>setCount(count+1)}>My Increment</button>
    <button onClick={()=>setCount(count-1)}>My Decrement</button>
    <span>{count}</span>
    </>
  )
}

export default Counter1