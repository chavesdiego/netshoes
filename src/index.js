import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import store from './store'

import ShelfContainer from './containers/ShelfContainer'

import './index.css'


render(
  <Provider store={store}>
    <ShelfContainer />
  </Provider>,
  document.getElementById('root')
)
