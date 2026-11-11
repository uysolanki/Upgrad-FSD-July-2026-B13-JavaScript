
import React, { useContext, useEffect, useState } from 'react'
import './ProductsPage.css'
import Filterbar from './Filterbar'
import Searchbar from './Searchbar'
import axios from 'axios'
import Product from './Product'
import ProductContext from '../contexts/ProductContext'

const ProductsPage7 = () => {

    const {products, setProducts} = useContext(ProductContext)
    const [buproducts, setBuproducts] = useState(products)

  

    const productCategories = buproducts.map(
        (prod, index) => prod.category
    )

    console.log(productCategories)

    const uniqueCategories = new Set(productCategories)

    console.log(uniqueCategories)

    const allCategories = [...uniqueCategories, 'All']
    console.log(allCategories)

    function filterProductByCategory(value)  //electronics
    {
        if (value === 'All') {
            setProducts(buproducts)
        }
        else {
            const filteredProducts = buproducts.filter(
                (prod) => prod.category === value
            )
            setProducts(filteredProducts)
        }
    }

    function searchrProductByTitle(event) {
        let searchedText = event.target.value
        console.log(searchedText)

        const searchedProducts = buproducts.filter(
            (product) => product.title.toLowerCase().includes(searchedText.toLowerCase()) ||
                product.description.toLowerCase().includes(searchedText.toLowerCase())
        )
        setProducts(searchedProducts)
    }
    return (
        <>
            <Filterbar menu={allCategories} handleClick={filterProductByCategory} />
            <Searchbar handleOnChange={searchrProductByTitle} />
            <div className="container py-5">

                {/* Page Header */}
                <div className="text-center mb-5">

                    <span className="badge bg-primary-subtle text-primary px-3 py-2 mb-3">
                        OUR COLLECTION
                    </span>

                    <h1 className="fw-bold display-5">
                        Explore Products
                    </h1>

                    <p className="text-secondary">
                        Discover amazing products at the best prices.
                    </p>

                </div>

                {/* Product Grid */}
                <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 g-4">

                    {products.map((product, index) =>  <Product key={index} prod={product}/>   )}

                </div>

            </div>
        </>
    )
}

export default ProductsPage7
