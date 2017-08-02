import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { onAddToCart } from '../actions'

import ProductComponent from '../components/ProductComponent'

const ProductsContainer = ({ products, onAddToCart }) => (
  <div className="shelf">
    {products.map(product =>
      <ProductComponent
        key={product.id}
        product={product}
        onAddToCart={() => onAddToCart(product)} />
    )}
  </div>
)

ProductsContainer.propTypes = {
  products: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
  products: state.productList
})

export default connect(
  mapStateToProps,
  { onAddToCart }
)(ProductsContainer)
