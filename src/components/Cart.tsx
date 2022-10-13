import React, { useEffect, useState } from 'react'
import { Button, Col, Form, Image, ListGroup, Row } from 'react-bootstrap'
import { AiFillDelete } from 'react-icons/ai'
import { CartState } from '../context/Context'
import { ReducerActionType } from '../models/models'
import Rating from './Rating'

const Cart: React.FC = (): JSX.Element => {
  const { state: { cart }, dispatch } = CartState()
  const [total, setTotal] = useState<number>(0)
  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + Number(curr.price), 0))
  }, [cart])
  return (
        <div className='home'>
          <div className='productContainer'>
            <ListGroup>
              {
                cart.map((prod) => (
                   <ListGroup.Item key={prod.id}>
                    <Row>
                      <Col md={2}>
                        <Image src={prod.image} alt={prod.name} fluid rounded/>
                      </Col>
                      <Col md={2}>{prod.name}</Col>
                      <Col md={2}>$ {prod.price}</Col>
                      <Col md={2}>
                        <Rating rating={prod.ratings}/>
                      </Col>
                      <Col md={2}>
                        <Form.Control as='select' value={prod.qty}>
                          {[...Array(prod.inStock).keys()].map((x) => (
                            <option key={x + 1}>{x + 1}</option>
                          ))}
                        </Form.Control>
                      </Col>
                      <Col md={2}>
                        <Button
                          type='button'
                          variant='light'
                          onClick={() => {
                            if (dispatch !== undefined) {
                              dispatch({ type: ReducerActionType.REMOVE_FROM_CART, payload: prod })
                            }
                          }}
                        >
                          <AiFillDelete fontSize='20px'/>
                        </Button>
                      </Col>
                    </Row>
                   </ListGroup.Item>

                ))
              }
            </ListGroup>
          </div>
          <div className='filters summary'>
            <span className='title'>
              Subtotal ({cart.length}) items
            </span>
            <span style={{ fontWeight: 700, fontSize: 20 }}>Total: $ {total}</span>
            <Button type="button" disabled={cart.length === 0}>
              Proceed to Checkout
            </Button>
          </div>
        </div>
  )
}

export default Cart
