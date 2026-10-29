import React, { useState } from 'react'
// import './Counter.css'
import styles from './Counter1.module.css'
const Counter2d = () => {

  const[count,setCount]= useState(0)
  function updateCounter(value)
  {
    setCount(count+value)
  }

  
  return (
    <>
    {/* <button style={count%2==0?{'backgroundColor':'red'}:{'backgroundColor':'green'}} className="inc-btn" onClick={()=>updateCounter(1)}>Increment By 1</button> */}
    {/* <button className={count%2==0?'yellow':'purple'} onClick={()=>updateCounter(1)}>Increment By 1</button> */}
    {/* <button className="btn btn-warning" onClick={()=>updateCounter(1)}>Increment By 1</button> */}
    <button className={count%2==0?'btn btn-warning':'btn btn-primary'} onClick={()=>updateCounter(1)}>Increment By 1</button>
    <br/>
    <span>{count}</span>
    </>
  )
}

export default Counter2d