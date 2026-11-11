import React, { useContext } from 'react'
import DemoContext from '../contexts/DemoContext'

const Landingpage = () => {

   const sharedData= useContext(DemoContext)
   const{fruit,car}= useContext(DemoContext)
   console.log(`I am eating ${sharedData.fruit}`)
   console.log(`I am eating ${fruit}`)
  return (
    <div>Welcome to my Homepage</div>
  )
}

export default Landingpage