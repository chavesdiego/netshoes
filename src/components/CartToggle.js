import React from 'react'

import './CartToggle.css'

const toggleCart = () => {
  document.querySelector('.cart').classList.toggle('opened')
  document.querySelector('.cart-overlay').classList.toggle('opened')
}

const CartComponent = ({ products }) => (
  <div>
    <span className="cart-toggle" onClick={() => toggleCart()}>{products.length || 0}</span>
    <div className="cart-overlay" onClick={() => toggleCart()}></div>
  </div>
)

export default CartComponent
