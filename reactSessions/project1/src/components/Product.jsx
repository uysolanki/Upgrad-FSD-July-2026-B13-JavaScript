import React from 'react'
import { Link } from 'react-router-dom'

const Product = ({prod}) => {
  return (
      <div className="col" key={prod.id}>

                            <div className="card product-card h-100 border-0 shadow-sm">

                                {/* Product Image */}
                                <div className="product-image-container">
                                <Link to={`/single/${prod.id}`}>     
                                    <img
                                        src={prod.image}
                                        className="card-img-top product-image"
                                        alt={prod.title}
                                        loading="lazy"
                                    />
                                </Link>
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
  )
}

export default Product