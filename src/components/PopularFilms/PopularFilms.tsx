import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useGetPopularQuery, useLazyGetPopularQuery } from '../../api/movie.api'
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
  const [page, setPage] = useState(1)
  const [fetchPopular, { isLoading, data, isSuccess }] =
    useLazyGetPopularQuery()
  // const { data, isSuccess, isLoading } = useGetPopularQuery(page)
  const [films, setFilms] = useState<IFilm[]>([])
  const loadMore = () => {
    setPage(prev => prev + 1)
  }

  useEffect(() => {
    fetchPopular(page).then(() => {
      if (isSuccess) {
        setFilms(prev => [...prev, ...data!.results])
      }
    })
  }, [page])

  return (
    <div className={cn(className)}>
      <div className={cn(styles.upper)}>
        <Title variant='h1'>Popular</Title>
        <ButtonBase>See All</ButtonBase>
      </div>
      <Grid>
        {isLoading &&
          new Array(16)
            .fill('')
            .map((_, index) => <FilmItemLoading key={index} />)}
        {isSuccess &&
          films.map((film: IFilm) => <FilmItem key={film.id} film={film} />)}
      </Grid>
      <ButtonBase onClick={loadMore}>Show more</ButtonBase>
    </div>
  )
}
