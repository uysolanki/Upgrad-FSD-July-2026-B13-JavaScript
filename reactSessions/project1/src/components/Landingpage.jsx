import React, { useContext } from 'react'
import DemoContext from '../contexts/DemoContext'

const Landingpage = () => {

   const sharedData= useContext(DemoContext)
   console.log(`I am eating ${sharedData.fruit}`)
  return (
    <div>Welcome to my Homepage</div>
  )
}

export default Landingpage