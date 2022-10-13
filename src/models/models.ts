export interface ShoppingCart extends Product {
  qty: number
}

export interface Product {
  id: string
  name: string
  price: string
  image: string
  inStock: number
  fastDelivery: boolean
  ratings: number
}

export interface Dispatch {
  type: ReducerActionType
  payload: Product
}

export interface ProductState {
  state: CartProducts
  dispatch?: (action: ReducerAction) => void
}

export interface CartProducts {
  products: Product[]
  cart: ShoppingCart[]
}

export interface RatingStyle {
  cursor: string
}

export enum ReducerActionType {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  EDIT_CART,
}

export interface ReducerAction {
  type: ReducerActionType
  payload: Product
}
