import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
const Navbar = () => {
  return (
    <ul>
        <Link to="/">      <li>Home</li>            </Link>
        <Link to="/rtb">   <li>RichText Box</li>    </Link>
        <Link to="/count">  <li>Counter</li>        </Link>
        <Link to="/shop">   <li>Shopping</li>       </Link>
    </ul>
  )
}

export default Navbar