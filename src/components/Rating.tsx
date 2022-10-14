import React from 'react'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import { RatingStyle } from '../models/models'

interface Props {
  rating: number
  onClick?: (i: number) => void
  style?: RatingStyle
}

const Rating: React.FC<Props> = ({ rating, onClick, style }): JSX.Element => {
  const maxRating: number[] = [...Array(5)]
  return (
   <>
    {maxRating.map((_, i) => (
      <span key={i} onClick = {() => onClick !== undefined ? onClick(i + 1) : null} style={style}>
        {rating > i
          ? (
          <AiFillStar fontSize='15px'/>
            )
          : (
          <AiOutlineStar fontSize='15px'/>
            )}
      </span>
    ))}
   </>
  )
}

export default Rating
