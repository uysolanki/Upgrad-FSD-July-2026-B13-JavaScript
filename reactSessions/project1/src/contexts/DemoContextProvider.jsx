import { useState } from "react";
import DemoContext from "./DemoContext";


function DemoContextProvider({children}) 
{
    const[user,setUser]=useState( { sname:'Alice'} )	//data u wish to share with other components
    let fruit="Apple";
    let car="Audi"
    let n1=10
    let n2=20.0


   // let sharedData = { fruit, car};          //put all the data into an object which u want the componets to access
  return (
   
   <DemoContext.Provider value={{ fruit, car}}>		
    {children}
   </DemoContext.Provider>
  )
}


export default DemoContextProvider