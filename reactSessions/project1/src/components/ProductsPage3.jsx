import React, { useState } from 'react'
import myProducts from '../../data/products'
import './ProductsPage.css'
const ProductsPage3 = () => {
    const [products, setProducts] = useState(myProducts)
    console.log(products)
    const productTitles = products.map(
        (product, index) => {
            return product.title
        }
    )

    console.log(productTitles)
    return (
        <>
        <div className='products-grid'>
            {products.map(
                (prod, index) => {
                    return <div key={index} className="card" style={{'width':'18rem'}}>
  <img src={prod.image} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{prod.title}</h5>
    <p className="card-text">{prod.description}</p>
    <a href="#" className="btn btn-primary">Add to Cart</a>
  </div>
</div>
                }
            )}
            </div>
        </>

    )
}

export default ProductsPage3