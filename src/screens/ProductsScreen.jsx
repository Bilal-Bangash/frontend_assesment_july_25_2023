import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { listProducts } from '../redux/actions/productAction'
import { ProductList } from '../components'

function ProductsScreen() {
  const dispatch = useDispatch()
  const productList = useSelector((state) => state.productList)
  const { loading, error, products } = productList
  useEffect(() => {
    dispatch(listProducts())
  }, [dispatch])

  return (
    <ProductList
      heading="Latest Products"
      loading={loading}
      error={error}
      products={products}
    />
  )
}

export default ProductsScreen
