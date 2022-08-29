import React, { useState } from 'react'
import { IFilm } from '../../types/films'
import { Title } from '../../ui/Title/Title'
import cn from 'classnames'
import styles from './FilItem.module.scss'
import { getYear } from '../../utils/getYear'
import { FilmRating } from './FilmRating/FilmRating'

interface IFilmItemProps {
  film: IFilm
}

export const FilmItem = ({ film }: IFilmItemProps) => {
  const { year } = getYear(film.release_date)
  return (
    <div className={cn(styles.filmItem)}>
      <div className={cn('imageWrapper', styles.imageWrapper)}>
        <img
          src={`${process.env.REACT_APP_IMAGES_URL}${film.poster_path}`}
          alt={film.title}
        />
      </div>
      <Title variant='h3' className={cn(styles.title)}>
        {film.title}
      </Title>
      <p className={cn(styles.year)}>{year}</p>
      <FilmRating vote_average={film.vote_average} />
    </div>
  )
}
