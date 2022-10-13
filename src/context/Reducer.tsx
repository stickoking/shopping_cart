import { Reducer } from 'react'
import { CartProducts, ReducerAction, ReducerActionType } from '../models/models'

export const cartReducer: Reducer<CartProducts, ReducerAction> = (state, action) => {
  switch (action.type) {
    case ReducerActionType.ADD_TO_CART:
      return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] }
    case ReducerActionType.REMOVE_FROM_CART:
      return { ...state, cart: state.cart.filter(c => c.id !== action.payload.id) }
    default:
      return state
  }
}
