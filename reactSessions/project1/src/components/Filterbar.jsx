import React from 'react'
import './Filterbar.css'

const Filterbar = (props) => {
  return (
    <ol>
        {props.menu.map(
            (item,index)=>{
                    return <li key={index} onClick={()=>props.handleClick(item)}>{item}</li>
            }
        )}
    </ol>
  )
}

export default Filterbar