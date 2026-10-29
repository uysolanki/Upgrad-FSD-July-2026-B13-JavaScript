import React, { useState } from 'react'
import './TextArea.css'

const TextArea = () => {
    const [data,setData]=useState("")
    function insertData(event)
    {
        setData(event.target.value)
        console.log(data)
    }
  return (
    <>
    <textarea rows="10" cols="30" onChange={insertData} value={data}></textarea>
    <button onClick={()=>setData(data.toUpperCase())}>UpperCase</button>
    <button onClick={()=>setData(data.toLowerCase())}>LowerCase</button>
    <p>Count of Chars Chars {data.length}</p>
    </>
  )
}

export default TextArea