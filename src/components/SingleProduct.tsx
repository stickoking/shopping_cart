import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { CartState } from '../context/Context'
import { Product, ReducerActionType } from '../models/models'
import Rating from './Rating'
import './styles.css'

interface Props {
  prod: Product
}

const SingleProduct: React.FC<Props> = ({ prod }): JSX.Element => {
  const { state: { cart }, dispatch } = CartState()
  return (
    <div className='products'>
      <Card>
        <Card.Img variant='top' src={prod.image} alt={prod.name}/>
        <Card.Body>
          <Card.Title>{prod.name}</Card.Title>
          <Card.Subtitle style={{ paddingBottom: 10 }}>
            <span>$ {prod.price.split('.')[0]}</span>
            {prod.fastDelivery
              ? (
                  <div>Fast Delivery</div>
                )
              : (
                  <div>4 days delivery</div>
                )}
              <Rating rating={prod.ratings}/>
          </Card.Subtitle>
          {
            cart.some((p: { id: string }) => p.id === prod.id)
              ? (
              <Button
              variant='danger'
              onClick={() => {
                if (dispatch !== undefined) { dispatch({ type: ReducerActionType.REMOVE_FROM_CART, payload: prod }) }
              }}
              >
                Remove from cart
              </Button>
                )
              : (
              <Button disabled={prod.inStock === 0}
                onClick={() => {
                  if (dispatch !== undefined) { dispatch({ type: ReducerActionType.ADD_TO_CART, payload: prod }) }
                }}
              >{prod.inStock > 0 ? 'Add to cart' : 'Out of stock'}</Button>
                )
          }

        </Card.Body>
      </Card>
    </div>
  )
}

export default SingleProduct
