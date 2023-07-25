import {
  createStore,
  combineReducers,
  applyMiddleware,
  Store,
  Action,
} from 'redux'
import thunk, { ThunkAction, ThunkDispatch, ThunkMiddleware } from 'redux-thunk'
import {
  productListReducer,
  productDetailReducer,
  ProductListActions,
  ProductDetailActions,
  ProductListState,
  ProductDetailState,
} from './reducers/productReducers'

export type RootState = {
  productList: ProductListState
  productDetails: ProductDetailState
}

export type AppActions = ProductListActions | ProductDetailActions

export type DispatchType = ThunkDispatch<RootState, unknown, AppActions>

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>

const reducer = combineReducers<RootState>({
  productList: productListReducer,
  productDetails: productDetailReducer,
})

const initialState = {}

const middleware = [thunk as ThunkMiddleware<RootState, AppActions>]

const store: Store<RootState, AppActions> & {
  dispatch: ThunkDispatch<RootState, unknown, AppActions>
} = createStore(reducer, initialState, applyMiddleware(...middleware))

export default store
