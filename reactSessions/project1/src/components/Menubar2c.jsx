import React from 'react'
import styles from'./Menubar2c.module.css'
import menus from'../../data/mydata.js'
const Menubar2c = () => {
  //let myCSSForOL={"backgroundColor":"pink"}
  function activity(menu)
  {
    alert(menu)
  }
  return (
    // <ol className='styles.shoheb styles.niraj'>
    <ol id='styles.upgrad'>
        {menus.map(
            (menu,index)=><li onClick={()=>activity(menu)} key={index}>{menu}</li> 
        )}
    </ol>
  )
}

export default Menubar2c