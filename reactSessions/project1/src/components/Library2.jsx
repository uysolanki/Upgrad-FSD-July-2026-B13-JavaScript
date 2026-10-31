import React from 'react'
import Book from './Book'
import Book2 from './Book2'

const Library2 = () => {
        function addToCart()
        {
                alert("Book Added to Cart")
        }
  return (
    <>
        <Book2 id="101" title="FSD" price="500" author="Bala" handleClick={addToCart} bgc="red" />     {/* props={id:101,title:Java:price:50,author:Bala} */}
        <Book2 id="102" title="DS" price="400" author="Yash"  handleClick={addToCart} bgc="blue"/> 
        <Book2 id="103" title="AI" price="300" author="Smith" handleClick={addToCart} bgc="green"/>     
    </>
  )
}

export default Library2