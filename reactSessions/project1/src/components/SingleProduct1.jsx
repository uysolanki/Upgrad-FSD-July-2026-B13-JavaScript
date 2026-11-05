
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import ProductDetails from './ProductDetails'
import './SingleProduct.css'

const SingleProduct1 = () => {

    const { prodid } = useParams()

    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')

    useEffect(() => {

        async function loadData() {

            try {
                setLoading(true)
                setError('')

                const response = await axios.get(
                    `https://fakestoreapi.com/products/${prodid}`
                )

                setProduct(response.data)
            }
            catch (error) {
                console.log(error)
                setError('Unable to load product details.')
            }
            finally {
                setLoading(false)
            }
        }

        loadData()

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

export default SingleProduct1
