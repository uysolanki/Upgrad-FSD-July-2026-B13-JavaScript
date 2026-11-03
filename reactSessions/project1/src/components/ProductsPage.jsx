import React, { useState } from 'react'
import myProducts from '../../data/products'
import './ProductsPage.css'
const ProductsPage = () => {
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
        (prod,index)=><h1>{prod.title}</h1>
    )}
    </>
    
  )
}

export default ProductsPage