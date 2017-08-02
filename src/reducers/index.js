import { combineReducers } from 'redux'
import { productList } from './productsReducers'
import { cart } from './cartReducers'

const rootReducer = combineReducers({
  productList,
  cart
})

export default rootReducer
