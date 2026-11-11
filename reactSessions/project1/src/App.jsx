import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Landingpage from './components/Landingpage'
import TextArea1 from './components/TextArea1'
import Counter2d from './components/Counter2d'
import ProductsPage5 from './components/ProductsPage5'
import ProductsPage6 from './components/ProductsPage6'
import SingleProduct from './components/SingleProduct'
import SingleProduct1 from './components/SingleProduct1'
import ProductsPage7 from './components/ProductsPage7'
import SingleProduct2 from './components/SingleProduct2'

const App = () => {
  return (
  <>
  <Router>
      <Navbar/>
      <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/rtb" element={<TextArea1 />} />
          <Route path="/count" element={<Counter2d />} />
          <Route path="/shop" element={<ProductsPage7 />} />
          <Route path="/single/:prodid" element={<SingleProduct2/>} />
      </Routes>
  </Router>
  </>
  )
}

export default App