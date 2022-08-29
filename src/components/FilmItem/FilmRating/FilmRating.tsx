import React from 'react'
import styles from './FilmRating.module.scss'
import cn from 'classnames'

interface IFilmRatingProps {
  vote_average: number
}

export const FilmRating = ({ vote_average }: IFilmRatingProps) => {
  return (
    <span
      className={cn(styles.rating, {
        [styles.good]: vote_average >= 7,
        [styles.neutral]: vote_average < 7 && vote_average > 5,
        [styles.bad]: vote_average <= 5,
      })}>
      {vote_average}
    </span>
  )
}
