export interface Product {
  id: string
  name: string
  price: string
  image: string
  inStock: number
  fastDelivery: boolean
  ratings: number
  qty?: number
}

export interface Filter {
  byStock: boolean
  byFastDelivery: boolean
  byRating: number
  searchQuery: string
  sort: SortType
}

type Dispatch = (action: ReducerAction) => void
type FilterDispatch = (action: FilterReducerAction) => void

export interface ProductState {
  state: CartProducts
  dispatch?: Dispatch
}

export interface FilterState {
  filterState: Filter
  filterDispatch?: FilterDispatch
}

export interface CartProducts {
  products: Product[]
  cart: Product[]
}

export interface RatingStyle {
  cursor: string
}

export enum SortType {
  LOW_TO_HIGH,
  HIGH_TO_LOW,
}

export enum ReducerActionType {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  EDIT_CART,
  SORT_BY_PRICE,
  FILTER_BY_STOCK,
  FILTER_BY_DELIVERY,
  FILTER_BY_RATING,
  FILTER_BY_SEARCH,
  CLEAR_FILTERS
}

export interface FilterReducerAction {
  type: ReducerActionType
  payload?: any
}

export interface ReducerAction {
  type: ReducerActionType
  payload: Product
}
