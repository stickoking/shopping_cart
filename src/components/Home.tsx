import React, { ReactElement } from 'react'
import { CartState, FiltersState } from '../context/Context'
import { Product, SortType } from '../models/models'
import Filters from './Filters'
import SingleProduct from './SingleProduct'
import './styles.css'

const Home: React.FC = (): JSX.Element => {
  const { state: { products } } = CartState()
  const { filterState } = FiltersState()
  const transformProducts = (): Product[] => {
    let sortedProducts: Product[] = products
    sortedProducts = sortedProducts.sort((a, b) => (
      filterState.sort === SortType.LOW_TO_HIGH ? Number(a.price) - Number(b.price) : Number(b.price) - Number(a.price)
    ))
    sortedProducts = !filterState.byStock ? sortedProducts.filter(p => p.inStock > 0) : sortedProducts
    sortedProducts = filterState.byFastDelivery ? sortedProducts.filter(p => p.fastDelivery) : sortedProducts
    sortedProducts = filterState.byRating > 0 ? sortedProducts.filter(p => p.ratings === filterState.byRating) : sortedProducts
    sortedProducts = filterState.searchQuery.length > 0 ? sortedProducts.filter(p => p.name.toLowerCase().includes(filterState.searchQuery.toLowerCase())) : sortedProducts
    return sortedProducts
  }
  return (
       <div className='home'>
        {<Filters/>}
        <div className='productContainer'>
        {
          transformProducts().map((prod: Product): ReactElement => {
            return <SingleProduct prod={prod} key={prod.id}/>
          })
        }
        </div>
       </div>
  )
}

export default Home
