import React from 'react'
import './Menubar.css'
import menus from'../../data/mydata.js'
const Menubar2b = () => {
  //let myCSSForOL={"backgroundColor":"pink"}
  function activity(menu)
  {
    alert(menu)
  }
  return (
    // <ol style={myCSSForOL}>
     <ol style={{"backgroundColor":"pink","color":"white"}}>
        {menus.map(
            (menu,index)=><li onClick={()=>activity(menu)} key={index}>{menu}</li> 
        )}
    </ol>
  )
}

export default Menubar2b