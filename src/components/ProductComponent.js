import React from 'react'

import './Product.css'

const formatCurrency = value =>
  value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' } )

const Product = ({ product, onAddToCart }) => (

  <figure key={product.id} className="product">
    <img src={`../img/${product.photo}`} alt="" onClick={onAddToCart} />
    <figcaption>
      <h2 className="product__title">{product.title}</h2>
      <p className="product__price">
        <span className="product__price--value">
          {formatCurrency(product.price)}
        </span>
        {product.installments > 1 &&
          <span className="product__price--installments">
            ou {product.installments}x {formatCurrency(product.price / product.installments)}
          </span>
        }
      </p>
    </figcaption>
  </figure>

)

export default Product
