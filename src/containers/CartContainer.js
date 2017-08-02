import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { onRemoveFromCart } from '../actions'

import CartComponent from '../components/CartComponent'
import CartToggle from '../components/CartToggle'

const formatCurrency = value =>
  value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' } )

const CartContainer = ({ products = [], total, onRemoveFromCart }) => (
  <div>
    <CartToggle products={products}/>
    <div className="cart">
      <div className="cart__header">
        <span className="cart__header--counter">{products.length || 0}</span>
        <h2 className="cart__header--title">Sacola</h2>
      </div>
      <ul className="cart__body">
        {products.length ? (
          products.map(product =>
            <CartComponent
              key={product.id}
              product={product}
              onRemoveFromCart={() => onRemoveFromCart(product)}/>
          )
        ) : (
          <li className="empty-cart"></li>
        )}
      </ul>
      {products.length > 0 &&
        <div className="cart__footer">
          <dl className="cart__total">
            <dt className="cart__total--title">Subtotal</dt>
            <dd className="cart__total--value">
              <strong>
                {formatCurrency(total)}
              </strong>
              <small>

              </small>
            </dd>
          </dl>
          <button className="cart__footer--button">Comprar</button>
        </div>
      }
    </div>
  </div>

)

CartContainer.propTypes = {
  products: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
  products: state.cart.products,
  total: state.cart.total
})

export default connect(
  mapStateToProps,
  { onRemoveFromCart }
)(CartContainer)
