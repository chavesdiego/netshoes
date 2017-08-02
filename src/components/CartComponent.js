import React from 'react'

import './Cart.css'

const formatCurrency = value =>
  value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' } )

const CartComponent = ({ product, onRemoveFromCart }) => (
  <li className="cart__item">
    <span onClick={onRemoveFromCart} className="cart__item--remove">&times;</span>
    <div className="cart__item--content">
      <span className="cart__item--thumb" style={{"backgroundImage": `url(../img/${product.photo})`}}></span>
      <div className="cart__item--title">
        <strong>{product.title}</strong>
        <small>{product.style}</small>
      </div>
      <div className="cart__item--price">
        {formatCurrency(product.price)}
      </div>
    </div>
  </li>
)

export default CartComponent
