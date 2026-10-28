import React from 'react'
import './Menubar.css'
import menus from'../../data/mydata.js'
const Menubar2b = () => {
  //let myCSSForOL={"backgroundColor":"pink"}
  return (
    // <ol style={myCSSForOL}>
     <ol style={{"backgroundColor":"pink","color":"white"}}>
        {menus.map(
            (menu,index)=><li key={index}>{menu}</li> 
        )}
    </ol>
  )
}

export default Menubar2b