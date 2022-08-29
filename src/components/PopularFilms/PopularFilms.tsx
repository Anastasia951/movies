import React from 'react'
import { useGetPopularQuery } from '../../api/movie.api'
import { FilmItem } from '../FilmItem/FilmItem'

import { Title } from '../../ui/Title/Title'
import { IFilm } from '../../types/films'
import { ButtonBase } from '../../ui/ButtonBase/ButtonBase'

import styles from './PopularFilms.module.scss'
import cn from 'classnames'
import { Grid } from '../../ui/Grid/Grid'
import FilmItemLoading from '../../ui/FilItemLoading/FilItemLoading'

interface IPopularFilmsProps {
  className?: string
}

export const PopularFilms = ({ className }: IPopularFilmsProps) => {
  const { data, isSuccess, isLoading } = useGetPopularQuery(1)

  return (
    <div className={cn(className)}>
      <div className={cn(styles.upper)}>
        <Title variant='h1'>Popular</Title>
        <ButtonBase>See All</ButtonBase>
      </div>
      <Grid>
        {isLoading && new Array(16).fill('').map(() => <FilmItemLoading />)}
        {isSuccess &&
          data.results.map((film: IFilm) => (
            <FilmItem key={film.id} film={film} />
          ))}
      </Grid>
      <ButtonBase>Show more</ButtonBase>
    </div>
  )
}
