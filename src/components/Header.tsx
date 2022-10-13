import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import { Container, Dropdown, FormControl, Nav, Navbar, Badge, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { CartState } from '../context/Context'
import { AiFillDelete } from 'react-icons/ai'
import { ReducerActionType } from '../models/models'

const Header: React.FC = (): JSX.Element => {
  const { state: { cart }, dispatch } = CartState()
  return (
        <Navbar bg = "dark" variant= "dark" style = {{ height: 80 }}>
            <Container>
                <Navbar.Brand>
                    <Link to='/'>Shopping Cart</Link>
                </Navbar.Brand>
                <Navbar.Text className='search'>
                    <FormControl
                        style={{ width: 500 }}
                        placeholder='Search a product'
                        className='m-auto'
                    />
                </Navbar.Text>
                <Nav>
                    <Dropdown align={'end'}>
                        <Dropdown.Toggle variant='success'>
                            <FaShoppingCart/>
                            <Badge>{cart.length}</Badge>
                        </Dropdown.Toggle>
                        <Dropdown.Menu style={{ minWidth: 370 }}>
                          {cart.length > 0
                            ? (
                                <>
                                  {
                                    cart.map((prod) => (
                                      <span className='cartitem' key={prod.id}>
                                        <img
                                          src={prod.image}
                                          className='cartItemImg'
                                          alt={prod.name}
                                        />
                                        <div className='cartItemDetail'>
                                          <span>{prod.name}</span>
                                          <span>$ {prod.price.split('.')[0]}</span>
                                        </div>
                                        {
                                          <AiFillDelete
                                            fontSize='20px'
                                            style={{ cursor: 'pointer' }}
                                            onClick={() => {
                                              if (dispatch !== undefined) {
                                                dispatch({ type: ReducerActionType.REMOVE_FROM_CART, payload: prod })
                                              }
                                            }}
                                          />
                                        }
                                      </span>
                                    ))
                                  }
                                  <Link to='/cart'>
                                    <Button style = {{ width: '95%', margin: '0 10px' }}>
                                      Go to Cart
                                    </Button>
                                  </Link>
                                </>
                              )
                            : (
                            <span style ={{ padding: 10 }}>Cart is Empty!</span>
                              )
                        }

                        </Dropdown.Menu>
                    </Dropdown>
                </Nav>
            </Container>
        </Navbar>
  )
}

export default Header
