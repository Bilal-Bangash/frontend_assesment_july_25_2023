import React, { useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { ProductList } from '../../components'
import { listProducts } from '../../redux/actions/productAction'
import { DispatchType, RootState } from '../../redux/store'
import styles from './HomeScreen.module.scss'

const HomePage = () => {
  const dispatch: DispatchType = useDispatch<DispatchType>()

  const productList = useSelector((state: RootState) => state.productList)

  const { loading, error, products } = productList

  useEffect(() => {
    dispatch(listProducts())
  }, [dispatch])

  return (
    <Container fluid className="my-2">
      <div className={styles.banner}>
        <div className={styles.overlay}></div>
        <Row
          className="justify-content-center text-center text-white"
          style={{ position: 'relative' }}
        >
          <Col xs={12} sm={10} md={8} lg={6}>
            <h1 className="text-white">Welcome to E-commerce Assessment!</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit
              quisquam quo voluptatum ducimus praesentium expedita ea, natus
              deserunt nesciunt sunt eius est facilis tenetur reiciendis fugit
              beatae numquam. Quo, ullam!
            </p>
          </Col>
        </Row>
      </div>
      <ProductList
        heading="Recommended Products"
        loading={loading}
        error={error}
        products={products?.slice(0, 8)}
      />
    </Container>
  )
}

export default HomePage
