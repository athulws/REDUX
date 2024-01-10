import React from 'react'
import '../Styles/CartButtons.css'
import { useDispatch } from 'react-redux'
import { addToCart } from './Cart'

const BeforeCart = () => {
  const dispatch = useDispatch(); // addToCart,increment,decrement ithellam call cheyyan, ennale update aaku // ingane aan redux il ulla method ne vilikkua
  return (
    <div className='before-cart'>
      <button className='add-cart-button' onClick={() => dispatch(addToCart())}>Add to cart</button>
    </div>
  )
}

export default BeforeCart
