
import React, { useEffect, useState } from 'react'
import './ProductsPage.css'
import Filterbar from './Filterbar'
import Searchbar from './Searchbar'
import axios from 'axios'

const ProductsPage5 = () => {

    const [products, setProducts] = useState([])
    const [buproducts, setBuproducts] = useState([])

    setInterval(
        ()=>{
            console.log("Hi")
        },1000
    )
    useEffect(
        ()=>{
            loadData()
        },[]
    )

    //[] when the component loads
    //skip  the code of useEffect will execute on each state change
    //[products]         the code of useEffect will execute on mentioned state changes 
    async function loadData() {
        try {
            const apiproducts = await axios.get("https://fakestoreapi.com/products")
            console.log(apiproducts)
            setProducts(apiproducts.data)
            setBuproducts(apiproducts.data)
        }
        catch (error) {
            console.log(error)
        }
    }
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

                    {products.map((prod, index) => (

                        <div className="col" key={prod.id || index}>

                            <div className="card product-card h-100 border-0 shadow-sm">

                                {/* Product Image */}
                                <div className="product-image-container">

                                    <img
                                        src={prod.image}
                                        className="card-img-top product-image"
                                        alt={prod.title}
                                        loading="lazy"
                                    />

                                    <span className="badge bg-danger product-badge">
                                        Popular
                                    </span>

                                </div>

                                {/* Product Details */}
                                <div className="card-body d-flex flex-column p-4">

                                    <h5 className="card-title fw-bold product-title">
                                        {prod.title}
                                    </h5>

                                    <p className="card-text text-secondary product-description">
                                        {prod.description}
                                    </p>

                                    <div className="mt-auto">

                                        <h4 className="fw-bold text-primary mb-3">
                                            ${prod.price}
                                        </h4>

                                        <button className="btn btn-primary w-100 rounded-pill fw-semibold">
                                            <i className="bi bi-cart-plus me-2"></i>
                                            Add to Cart
                                        </button>

                                    </div>

                                </div>

                            </div>

                        </div>

                    ))}

                </div>

            </div>
        </>
    )
}

export default ProductsPage5
