import React from 'react'

const Book = (props) => {
  return (
    <div>
                    <p>Book ID : {props.id}</p>
                    <p>Book Title : {props.title}</p>
                    <p>Book Price : {props.price}</p>
                    <p>Book Author : {props.author}</p>
    </div>
  )
}

export default Book