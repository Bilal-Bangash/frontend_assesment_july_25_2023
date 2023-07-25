import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import {
  productListReducer,
  productDetailReducer,
} from './reducers/productReducers'

const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailReducer,
})

const initialState = {}
const middleware = [thunk]
const store = createStore(reducer, initialState, applyMiddleware(...middleware))
export default store
