import React from 'react'
import './StudentPage.css'
import Student from './Student'

const StudentPage2 = () => {
  return (
    <>
    <Student name="Virat" city="Delhi" per="78.5"/>  {/* props= {name:"Virat",city:"Delhi",per:78.5} */}
    <Student name="Rohit" city="Mumbai" per="88.5"/>  {/* props= {bno:"1",btitle:"Java",price:780, author:Bala} */}
    <Student name="Sachin" city="Pune" per="98.5"/>
    </>
    
  )
}

export default StudentPage2