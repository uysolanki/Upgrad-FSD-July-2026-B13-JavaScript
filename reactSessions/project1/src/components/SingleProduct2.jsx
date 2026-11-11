
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProductDetails from './ProductDetails'
import './SingleProduct.css'
import ProductContext from '../contexts/ProductContext'

const SingleProduct2 = () => {

    const { prodid } = useParams()

    const {products, setProducts} = useContext(ProductContext)
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')

    console.log(prodid)
    useEffect(() => {
        const p1=products.find(  (prod)=> prod.id==prodid )
        setProduct(p1)
        setLoading(false)
    }, [prodid])

    if (loading) {
        return (
            <div className="container text-center py-5">
                <div className="spinner-border text-primary"
                    role="status">
                </div>
                <p className="mt-3 text-secondary">
                    Loading product details...
                </p>
            </div>
        )
    }

    if (error || !product) {
        return (
            <div className="container py-5 text-center">
                <h4>{error || 'Product not found'}</h4>
            </div>
        )
    }

    return (
        <ProductDetails prod={product} />
    )
}

export default SingleProduct2
