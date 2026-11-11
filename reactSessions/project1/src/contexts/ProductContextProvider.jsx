import { useEffect, useState } from "react";
import ProductContext from "./ProductContext";
import axios from 'axios'

function ProductContextProvider({children}) 
{
   const [products, setProducts] = useState([])
  
    useEffect(
        ()=>{
            loadData()
        },[]
    )

    async function loadData() {
        try {
            const apiproducts = await axios.get("https://fakestoreapi.com/products")
            console.log("Products in context")
            console.log(apiproducts)
            setProducts(apiproducts.data)
        }
        catch (error) {
            console.log(error)
        }
    }
  
  return (
   
   <ProductContext.Provider value={{products, setProducts}}>		
    {children}
   </ProductContext.Provider>
  )
}


export default ProductContextProvider