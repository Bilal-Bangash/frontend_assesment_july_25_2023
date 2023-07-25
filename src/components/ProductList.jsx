import { Col, Row } from 'react-bootstrap'
import Loader from './Loader'
import Message from './Message'
import Product from './Product'
import { memo } from 'react'

const ProductList = ({ heading, loading, error, products }) => {
  return (
    <>
      <h1>{heading}</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Row>
          {products &&
            products.map((product) => (
              <Col key={product.id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
        </Row>
      )}
    </>
  )
}

export default memo(ProductList)
