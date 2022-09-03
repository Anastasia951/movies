import React, { useEffect, useState } from 'react'
import cn from 'classnames'
import styles from './Recomendations.module.scss'
import { Title } from '../../ui/Title/Title'
import { useLazyGetRecomendationsQuery } from '../../api/movie.api'
import { IFilm } from '../../types/films'
import { ButtonBase } from '../../ui/ButtonBase/ButtonBase'
import { FilmItem } from '../FilmItem/FilmItem'
import { Grid } from '../../ui/Grid/Grid'

interface IRecomendationsProps {
  id?: string
}

/*
  TODO
  1. Remove double fetching first page
  2. Add styles
  3. Create loader component
  4. Stop fetching if current page more than max
*/
export const Recomendations = ({ id }: IRecomendationsProps) => {
  const filmId = id || ''
  const [filmsR, setFilmsR] = useState<IFilm[]>([])
  const [page, setPage] = useState(1)
  const [isFetching, setIsFetching] = useState(false)
  const [fetchRecomendations, { data, isSuccess, isLoading }] =
    useLazyGetRecomendationsQuery()

  useEffect(() => {
    fetchRecomendations({ page, id: filmId })
    setPage(page + 1)
  }, [isFetching])

  useEffect(() => {
    if (isSuccess) {
      setFilmsR(prev => [...prev, ...data!.results])
    }
  }, [isSuccess, page])
  if (!id) {
    return null
  }
  return (
    <div className={cn(styles.recomendations)}>
      <Title variant='h2'>Recomendations</Title>
      <Grid>
        {filmsR.map(item => (
          <FilmItem film={item} />
        ))}
      </Grid>
      <ButtonBase onClick={() => setIsFetching(!isFetching)}>Fetch</ButtonBase>
    </div>
  )
}
