import React, { useState } from 'react'
import myProducts from '../../data/products'
import './ProductsPage.css'
const ProductsPage2 = () => {
    const [products,setProducts]=useState(myProducts)
    console.log(products)
    const productTitles=products.map(
        (product,index)=>{
            return product.title
        }
    )

    console.log(productTitles)
  return (
    <>
    {products.map(
        (prod,index)=>
        {
            return <div>
                    <h1>{prod.title}</h1>
                    <p>{prod.price}</p>
                    <p>{prod.description}</p>
                    <img src={prod.image} height="100"></img>
            </div>
        } 
    )}
    </>
    
  )
}

export default ProductsPage2