import React, { createContext, ReactNode, useContext, useReducer, useState } from 'react'
import { Product, ShoppingCart } from '../models/models'
import { faker } from '@faker-js/faker'
import { cartReducer } from './Reducer'

interface Props {
  children: ReactNode
}

const defaultValues: Product = {
  id: '',
  name: '',
  price: '',
  image: '',
  inStock: 0,
  fastDelivery: false,
  ratings: 0,
  cart: []
}
const Cart = createContext<any | null>(defaultValues)

const Context: React.FC<Props> = ({ children }): JSX.Element => {
  const products: Product[] = [...Array(20)].map(() => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.fashion(),
    inStock: faker.helpers.arrayElement([0, 3, 5, 6, 7]),
    fastDelivery: faker.datatype.boolean(),
    ratings: faker.helpers.arrayElement([1, 2, 4, 5, 6])
  }))

  const [state, dispatch] = useReducer(cartReducer, {
    products,
    cart: []
  })
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [shoppingCart, setShoppingCart] = useState<ShoppingCart>(defaultValues)
  return (
    <Cart.Provider value={{ state, dispatch }}>
        {children}
    </Cart.Provider>
  )
}

export default Context

export const CartState = (): any => {
  return useContext(Cart)
}
