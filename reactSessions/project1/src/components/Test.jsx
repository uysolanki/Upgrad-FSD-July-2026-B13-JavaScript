import React from 'react'
import './Test.css'
const Test = () => {
 
        let n1=100
        let n2=100
        let n3=n1+n2
        console.log(n3)

        let cars=["Audi","BMW","Merc"]
        
    return (
    <>
        <div>My Name is Alice</div>
        <button>Login</button>
        {cars.map(
            (car)=>{
                    console.log(`I own ${car}`)
            }
        )}
    </>
  )
}

export default Test