import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { FiltersState } from '../context/Context'
import { ReducerActionType, SortType } from '../models/models'
import Rating from './Rating'
import './styles.css'

const Filters: React.FC = (): JSX.Element => {
  const { filterState, filterDispatch } = FiltersState()
  console.log(filterState, filterDispatch)
  console.log('test')
  return (
    <div className='filters'>
      <span className='title'> Filter Products</span>
      <span>
        <Form.Check
          inline
          label='Ascending'
          name='group1'
          type='radio'
          id={'inline-1'}
          onChange={() => {
            if (filterDispatch !== undefined) {
              filterDispatch({ type: ReducerActionType.SORT_BY_PRICE, payload: SortType.LOW_TO_HIGH })
            }
          }}
          checked={filterState.sort === SortType.LOW_TO_HIGH}
        />
      </span>
      <span>
        <Form.Check
          inline
          label='Descending'
          name='group1'
          type='radio'
          id={'inline-2'}
          onChange={() => {
            if (filterDispatch !== undefined) {
              filterDispatch({ type: ReducerActionType.SORT_BY_PRICE, payload: SortType.HIGH_TO_LOW })
            }
          }}
          checked={filterState.sort === SortType.HIGH_TO_LOW}
        />
      </span>
      <span>
        <Form.Check
          inline
          label='Inlcude Out of Stock'
          name='group1'
          type='checkbox'
          id={'inline-3'}
          onChange={() => {
            if (filterDispatch !== undefined) {
              filterDispatch({ type: ReducerActionType.FILTER_BY_STOCK })
            }
          }}
          checked={filterState.byStock}
        />
      </span>
      <span>
        <Form.Check
          inline
          label='Fast Delivery Only'
          name='group1'
          type='checkbox'
          id={'inline-4'}
          onChange={() => {
            if (filterDispatch !== undefined) {
              filterDispatch({ type: ReducerActionType.FILTER_BY_DELIVERY })
            }
          }}
          checked={filterState.byFastDelivery}
        />
      </span>
      <span>
        <label style={{ paddingRight: 10 }}>Rating: </label>
        <Rating rating = {filterState.byRating} onClick={(i: number) => { if (filterDispatch !== undefined) { filterDispatch({ type: ReducerActionType.FILTER_BY_RATING, payload: filterState.byRating !== i ? i++ : 0 }) } }} style = {{ cursor: 'pointer' }}/>
      </span>
      <Button variant='light' onClick={() => { if (filterDispatch !== undefined) { filterDispatch({ type: ReducerActionType.CLEAR_FILTERS }) } }}>Clear Filters</Button>
    </div>
  )
}

export default Filters
