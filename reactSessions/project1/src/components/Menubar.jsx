import React from 'react'
import './Menubar.css'

const Menubar = () => {
    const menus=["File", "Edit", "View","Selection"]
  return (
    <ol className='b13'>
        {menus.map(
            (menu,index)=>{
                    return <li key={index}>{menu}</li>
            }
        )}
    </ol>
  )
}

export default Menubar