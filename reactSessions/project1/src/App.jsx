import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Landingpage from './components/Landingpage'
import TextArea1 from './components/TextArea1'
import Counter2d from './components/Counter2d'
import ProductsPage5 from './components/ProductsPage5'

const App = () => {
  return (
  <>
  <Router>
      <Navbar/>
      <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/rtb" element={<TextArea1 />} />
          <Route path="/count" element={<Counter2d />} />
          <Route path="/shop" element={<ProductsPage5 />} />
      </Routes>
  </Router>
  </>
  )
}

export default App