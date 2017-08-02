import * as types from '../constants/ActionTypes'

export const productList = (state = [], action) => {
  
  switch(action.type) {
    case types.FETCH_PRODUCTS:
      return action.productList.products
    default:
      return state;
  }
}
