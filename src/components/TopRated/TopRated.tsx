import React from 'react'
import { useGetTopRatingQuery } from '../../api/movie.api'
import { FilmItem } from '../FilmItem/FilmItem'

import { Title } from '../../ui/Title/Title'
import { IFilm } from '../../types/films'
import { ButtonBase } from '../../ui/ButtonBase/ButtonBase'

import styles from './TopRated.module.scss'
import cn from 'classnames'
import { Grid } from '../../ui/Grid/Grid'
import FilmItemLoading from '../../ui/FilItemLoading/FilItemLoading'

interface ITopRatedProps {
  className?: string
}

export const TopRated = ({ className }: ITopRatedProps) => {
  const { data, isSuccess, isLoading } = useGetTopRatingQuery(1)

  return (
    <div className={cn(className)}>
      <div className={cn(styles.upper)}>
        <Title variant='h1'>Top Rated</Title>
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