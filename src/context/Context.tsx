import React, { createContext, ReactNode, useContext, useReducer } from 'react'
import { Product, ProductState, FilterState, SortType } from '../models/models'
import { faker } from '@faker-js/faker'
import { cartReducer, filterReducer } from './Reducer'

interface Props {
  children: ReactNode
}

const defaultProd: Product = {
  id: '',
  name: '',
  price: '',
  image: '',
  inStock: 0,
  fastDelivery: false,
  ratings: 1
}

const defaultFilter: FilterState = {
  filterState: {
    byStock: false,
    byFastDelivery: false,
    byRating: 0,
    searchQuery: '',
    sort: SortType.LOW_TO_HIGH
  }
}

const defaultValues: ProductState = {
  state: {
    products: [defaultProd],
    cart: [defaultProd]
  }
}
const Cart = createContext<ProductState>(defaultValues)
const Filters = createContext<FilterState>(defaultFilter)
faker.seed(99)

const Context: React.FC<Props> = ({ children }): JSX.Element => {
  const products: Product[] = [...Array(20)].map(() => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.image(),
    inStock: faker.helpers.arrayElement([0, 3, 5, 6, 7]),
    fastDelivery: faker.datatype.boolean(),
    ratings: faker.helpers.arrayElement([1, 2, 4, 5, 6])
  }))

  const [state, dispatch] = useReducer(cartReducer, {
    products,
    cart: []
  })

  const [filterState, filterDispatch] = useReducer(filterReducer, {
    byStock: false,
    byFastDelivery: false,
    byRating: 0,
    searchQuery: '',
    sort: SortType.LOW_TO_HIGH
  })
  return (
    <Cart.Provider value={{ state, dispatch }}>
      <Filters.Provider value={{ filterState, filterDispatch }}>
        {children}
      </Filters.Provider>
    </Cart.Provider>
  )
}

export default Context

export const CartState = (): ProductState => {
  return useContext(Cart)
}

export const FiltersState = (): FilterState => {
  return useContext(Filters)
}
