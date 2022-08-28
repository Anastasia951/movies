import React, { useState } from 'react'
import { IFilm } from '../../types/films'
import { Title } from '../../ui/Title/Title'
import cn from 'classnames'
import styles from './FilItem.module.scss'
import { getYear } from '../../utils/getYear'

interface IFilmItemProps {
  film: IFilm
}

export const FilmItem = ({ film }: IFilmItemProps) => {
  const { year } = getYear(film.release_date)
  // const promises = film.genre_ids.map(id =>
  //   fetch(
  //     `${process.env.REACT_APP_API_URL}/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}`
  //   )
  // )
  // if (film.genre_ids.length) {
  //   //https://api.themoviedb.org/3/genre/movie/list?api_key=<<api_key>>&language=en-US
  //   Promise.all(promises)
  //     .then(results => Promise.all(results.map(res => res.json())))
  //     .then(results => console.log(results))
  // }
  return (
    <div className={cn(styles.filmItem)}>
      <div className={cn('imageWrapper', styles.imageWrapper)}>
        <img
          src={`${process.env.REACT_APP_IMAGES_URL}/w500${film.poster_path}`}
          alt={film.title}
        />
      </div>
      <Title variant='h3'>{film.title}</Title>
      <p>{year}</p>
    </div>
  )
}
