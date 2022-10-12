import React from 'react'
import { Product } from '../models/models'

interface Props {
  prod: Product
}

const SingleProduct: React.FC<Props> = ({ prod }): JSX.Element => {
  console.log(prod)
  return (
    <div>
      {prod.name}
    </div>
  )
}

export default SingleProduct
