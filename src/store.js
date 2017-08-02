import thunkMiddleware from 'redux-thunk'
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './reducers'
import { getProductsList } from './actions'
import persistState from 'redux-localstorage'

const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware),
  persistState()
)

store.dispatch(getProductsList())

export default store
