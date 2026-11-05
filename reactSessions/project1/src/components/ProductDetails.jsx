
import React, { useState } from 'react'
import './ProductDetails.css'

const ProductDetails = ({ prod }) => {

    const [quantity, setQuantity] = useState(1)
    const [message, setMessage] = useState('')

    const increaseQuantity = () => {
        setQuantity(prev => prev + 1)
    }

    const decreaseQuantity = () => {
        setQuantity(prev => Math.max(1, prev - 1))
    }

    const handleAddToCart = () => {
        // Connect your Cart Context / Redux functionality here.
        setMessage(`${quantity} item(s) selected for your cart.`)
    }

    return (

        <div className="single-product-page">

            <div className="container py-5">

                {/* Breadcrumb */}

                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <a href="/" className="text-decoration-none">
                                Home
                            </a>
                        </li>

                        <li className="breadcrumb-item">
                            <a href="/products"
                                className="text-decoration-none">
                                Products
                            </a>
                        </li>

                        <li className="breadcrumb-item active">
                            Product Details
                        </li>
                    </ol>
                </nav>

                <div className="row g-5 mt-2">

                    {/* LEFT SIDE - PRODUCT IMAGE */}

                    <div className="col-lg-6">

                        <div className="product-gallery">

                            <div className="product-main-image">

                                <span className="product-label">
                                    BEST SELLER
                                </span>

                                <img
                                    src={prod.image}
                                    alt={prod.title}
                                    className="single-product-image"
                                />

                            </div>

                            <div className="product-gallery-caption">
                                <i className="bi bi-zoom-in me-2"></i>
                                Product image
                            </div>

                        </div>

                    </div>


                    {/* RIGHT SIDE - PRODUCT INFORMATION */}

                    <div className="col-lg-6">

                        <div className="product-information">

                            <p className="product-category">
                                {prod.category}
                            </p>

                            <h1 className="product-heading">
                                {prod.title}
                            </h1>

                            {/* Rating */}

                            <div className="product-rating">

                                <span className="rating-number">
                                    {prod.rating?.rate ?? 'N/A'}
                                </span>

                                <span className="rating-stars">
                                    {'★'.repeat(
                                        Math.max(0, Math.min(
                                            5,
                                            Math.round(prod.rating?.rate || 0)
                                        ))
                                    )}
                                    {'☆'.repeat(
                                        5 - Math.max(0, Math.min(
                                            5,
                                            Math.round(prod.rating?.rate || 0)
                                        ))
                                    )}
                                </span>

                                <span className="rating-count">
                                    ({prod.rating?.count ?? 0} reviews)
                                </span>

                            </div>

                            <hr />

                            {/* Price */}

                            <div className="product-price-section">

                                <span className="current-price">
                                    ${prod.price?.toFixed(2)}
                                </span>

                                <span className="price-note">
                                    Inclusive of listed price
                                </span>

                            </div>

                            <hr />

                            {/* Description */}

                            <div className="product-description-section">

                                <h5>Product Description</h5>

                                <p>{prod.description}</p>

                            </div>

                            <hr />

                            {/* Quantity */}

                            <div className="quantity-section">

                                <h6>Quantity</h6>

                                <div className="quantity-control">

                                    <button
                                        type="button"
                                        onClick={decreaseQuantity}
                                        disabled={quantity === 1}
                                    >
                                        −
                                    </button>

                                    <span>{quantity}</span>

                                    <button
                                        type="button"
                                        onClick={increaseQuantity}
                                    >
                                        +
                                    </button>

                                </div>

                            </div>

                            {/* Action Buttons */}

                            <div className="product-actions">

                                <button
                                    className="btn btn-dark add-cart-btn"
                                    onClick={handleAddToCart}
                                >
                                    <i className="bi bi-cart-plus me-2"></i>
                                    Add To Cart
                                </button>

                                <button
                                    className="btn btn-primary buy-now-btn"
                                    onClick={handleAddToCart}
                                >
                                    Buy Now
                                    <i className="bi bi-arrow-right ms-2"></i>
                                </button>

                            </div>

                            {message && (
                                <div className="alert alert-success mt-3">
                                    {message}
                                </div>
                            )}

                            <hr />

                            {/* Service Information */}

                            <div className="product-services">

                                <div className="service-item">
                                    <i className="bi bi-truck"></i>
                                    <div>
                                        <strong>Delivery Information</strong>
                                        <p>Check delivery options at checkout.</p>
                                    </div>
                                </div>

                                <div className="service-item">
                                    <i className="bi bi-arrow-repeat"></i>
                                    <div>
                                        <strong>Easy Returns</strong>
                                        <p>Check the return policy before purchase.</p>
                                    </div>
                                </div>

                                <div className="service-item">
                                    <i className="bi bi-shield-check"></i>
                                    <div>
                                        <strong>Secure Shopping</strong>
                                        <p>Shop with confidence.</p>
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default ProductDetails
