import React from 'react'
import './Searchbar.css'
const Searchbar = (props) => {
  return (
    <>
    <input type="text" onChange={props.handleOnChange}/>
    </>
  )
}

export default Searchbar