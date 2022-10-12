import React, { ReactElement } from 'react'
import { CartState } from '../context/Context'
import { Product } from '../models/models'
import SingleProduct from './SingleProduct'
import './styles.css'

const Home: React.FC = () => {
  const { state: { products } } = CartState()
  // console.log(state, dispatch)
  return (
       <div className='home'>
        {/* {<Filters/>} */}
        <div className='productContainer'>
        {
          products.map((prod: Product): ReactElement => {
            return <SingleProduct prod={prod} key={prod.id}/>
          })
        }
        </div>
       </div>
  )
}

export default Home
