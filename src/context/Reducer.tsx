import { Reducer } from 'react'
import { CartProducts, Filter, FilterReducerAction, ReducerAction, ReducerActionType, SortType } from '../models/models'

export const cartReducer: Reducer<CartProducts, ReducerAction> = (state, action) => {
  const editedCart: CartProducts = { ...state, cart: state.cart.filter(c => c.id !== action.payload.id) }

  switch (action.type) {
    case ReducerActionType.ADD_TO_CART:
      return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] }
    case ReducerActionType.REMOVE_FROM_CART:
      return editedCart
    case ReducerActionType.EDIT_CART:
      return { ...editedCart, cart: [...editedCart.cart, { ...action.payload, qty: action.payload.qty }] }

    default:
      return state
  }
}

export const filterReducer: Reducer<Filter, FilterReducerAction> = (state, action) => {
  switch (action.type) {
    case ReducerActionType.SORT_BY_PRICE:
      return { ...state, sort: action.payload }
    case ReducerActionType.FILTER_BY_STOCK:
      return { ...state, byStock: !state.byStock }
    case ReducerActionType.FILTER_BY_DELIVERY:
      return { ...state, byFastDelivery: !state.byFastDelivery }
    case ReducerActionType.FILTER_BY_RATING:
      return { ...state, byRating: action.payload }
    case ReducerActionType.FILTER_BY_SEARCH:
      return { ...state, searchQuery: action.payload }
    case ReducerActionType.CLEAR_FILTERS:
      return {
        byStock: false,
        byFastDelivery: false,
        byRating: 0,
        searchQuery: '',
        sort: SortType.LOW_TO_HIGH
      }

    default:
      return state
  }
}
