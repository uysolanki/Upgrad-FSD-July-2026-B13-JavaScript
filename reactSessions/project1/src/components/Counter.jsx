import React, { useState } from 'react'
import './Counter.css'
const Counter = () => {

    const[count,setCount]= useState(0)
    //let count=0
    function increment()
    {
       setCount(count+1)
    }

    function decrement()
    {
       setCount(count-1)
    }
  return (
    <>
    <button onClick={increment}>Increment</button>
    <button onClick={decrement}>Decrement</button>
    <span>{count}</span>
    </>
  )
}

export default Counter