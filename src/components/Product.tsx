import React, { FC, memo } from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import { Product as ProductType } from '../redux/reducers/productReducers'
import Rating from './Rating'

interface ProductProps {
  product: ProductType
}

const Product: FC<ProductProps> = ({ product }) => {
  return (
    <Card className="my-3 p-3 rounded">
      <Link to={`/product/${product.id}`}>
        <Card.Img src={product.image} variant="top" />
      </Link>
      <Card.Body>
        <Link to={`/product/${product.id}`}>
          <Card.Title as="div">
            <strong>{product.title}</strong>
          </Card.Title>
        </Link>
        <Card.Text as="div">
          <Rating
            value={product.rating.rate}
            text={`${product.rating.count} reviews`}
            color="red"
          />
        </Card.Text>

        <Card.Text as="h3">${product.price}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default memo(Product)