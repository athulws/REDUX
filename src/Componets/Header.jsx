import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import '../Styles/Header.css'


const Header = () => {
  return (
    <div>
      <div className='fluid-container'>
        <div className='container'>
          <div className='debug'>
            <h1>Debug media</h1>
            <FaShoppingCart />
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Header

