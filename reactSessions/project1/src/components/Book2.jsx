import React from 'react'

const Book2 = ({id,price,author,title,handleClick,bgc}) => {
  return (
    <div onClick={handleClick} style={{backgroundColor:bgc}}>
                    <p>Book ID : {id}</p>
                    <p>Book Title : {title}</p>
                    <p>Book Price : {price}</p>
                    <p>Book Author : {author}</p>
    </div>
  )
}

export default Book2