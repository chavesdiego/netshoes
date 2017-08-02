import { CART_ADD, CART_REMOVE } from '../constants/ActionTypes'

const initialState = {
  products: [],
  total: 0
}

export const cart = (state = initialState, action) => {
  switch (action.type) {
    case CART_ADD:
      if(!state.products.filter(v => v.id === action.product.id).length) {
        return {
          products: [...state.products, action.product],
          total: state.total += action.product.price
        }
      } else {
        return state
      }
    case CART_REMOVE:
      return {
        products: state.products.filter(product => product.id !== action.product.id),
        total: state.total -= action.product.price
      }
    default:
      return state
  }
}
