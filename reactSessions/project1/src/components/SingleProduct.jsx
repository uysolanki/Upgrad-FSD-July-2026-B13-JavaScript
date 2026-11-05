import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Product from './Product'
import axios from 'axios'
import './SingleProduct.css'
const SingleProduct = () => {

    const {prodid}=useParams()
    console.log(prodid)

    const [product, setProduct] = useState([])
      
        useEffect(
            ()=>{
                loadData()
            },[prodid]
        )

        async function loadData() {
        try {
            const apiproducts = await axios.get(`https://fakestoreapi.com/products/${prodid}`)
            console.log(apiproducts)
            setProduct(apiproducts.data)
        }
        catch (error) {
            console.log(error)
        }
    }
  return (
    <>
        <Product prod={product}/>
    </>
  )
}

export default SingleProduct