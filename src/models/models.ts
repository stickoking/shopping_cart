export interface ShoppingCart {
  id: string | undefined
}

export interface Product {
  id: string
  name: string
  price: string
  image: string
  inStock: number
  fastDelivery: boolean
  ratings: number
  cart?: ShoppingCart[]
}

export enum ReducerActionType {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  EDIT_CART,
}

export interface ReducerAction {
  type: ReducerActionType
  payload?: any
}
