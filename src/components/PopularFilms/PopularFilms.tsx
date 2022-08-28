import React from 'react'
import { useGetPopularQuery } from '../../api/movie.api'
import { FilmItem } from '../FilmItem/FilmItem'

import { Title } from '../../ui/Title/Title'
import { IFilm } from '../../types/films'
import { ButtonBase } from '../../ui/ButtonBase/ButtonBase'

import styles from './PopularFilms.module.scss'
import cn from 'classnames'
import { Grid } from '../../ui/Grid/Grid'
export const PopularFilms = () => {
  const { data, isSuccess } = useGetPopularQuery(3)

  return (
    <div style={{ marginTop: '90px' }}>
      <div className={cn(styles.upper)}>
        <Title variant='h1'>Popular</Title>
        <ButtonBase />
      </div>
      <div>
        <Grid>
          {isSuccess &&
            data.results.map((film: IFilm) => <FilmItem film={film} />)}
        </Grid>
      </div>
    </div>
  )
}
