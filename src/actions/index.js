import * as types from '../constants/ActionTypes'
import { getProducts } from '../api'

const loadAllProducts = productList => ({
  type: types.FETCH_PRODUCTS,
  productList
})

export const getProductsList = () => dispatch => {
  getProducts().then(list => {
    dispatch(loadAllProducts(list))
  })
}

export const addToCart = product => ({
  type: types.CART_ADD,
  product
})

export const onAddToCart = product => dispatch => {
  dispatch(addToCart(product))
}

export const removeFromCart = product => ({
  type: types.CART_REMOVE,
  product
})

export const onRemoveFromCart = product => dispatch => {
  dispatch(removeFromCart(product))
}
