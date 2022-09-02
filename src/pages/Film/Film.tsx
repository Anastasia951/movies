import React, { useMemo } from 'react'
import { useParams } from 'react-router-dom'
import { useGetByIdQuery } from '../../api/movie.api'

import cn from 'classnames'
import styles from './Film.module.scss'
import { Title } from '../../ui/Title/Title'
import { getYear } from '../../utils/getYear'
import { FilmLoading } from '../../ui/FilmLoading/FilmLoading'

export const Film = () => {
  const params = useParams<Record<'id', string | undefined>>()
  const { data, isLoading, isSuccess } = useGetByIdQuery(params.id || '')

  return (
    <div>
      {isLoading && <FilmLoading />}
      {isSuccess && (
        <div className={cn(styles.film)}>
          <div className={cn(styles.imageWrapper)}>
            <img
              src={`${process.env.REACT_APP_IMAGES_URL}${data.backdrop_path}`}
              alt=''
            />
          </div>
          <div className={cn(styles.filmInfo)}>
            <Title variant='h1' className={cn(styles.title)}>
              {data.title}({getYear(data.release_date).year})
            </Title>
            <div className={cn(styles.filmTable)}>
              <div className={cn(styles.field)}>Genres</div>
              <div className={cn(styles.value)}>
                {data.genres.map(genre => genre.name + ' ')}
              </div>

              <div className={cn(styles.field)}>Budget</div>
              <div className={cn(styles.value)}>{data.budget}$</div>

              <div className={cn(styles.field)}>Overview</div>
              <div className={cn(styles.value)}>{data.overview}</div>

              <div className={cn(styles.field)}>Time</div>
              <div className={cn(styles.value)}>{data.runtime} min</div>

              <div className={cn(styles.field)}>Revenue</div>
              <div className={cn(styles.value)}>{data.revenue}$</div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
