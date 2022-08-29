import React from 'react'

import cn from 'classnames'
import { useGetNewestQuery } from '../../api/movie.api'
interface INewFilmsProps {
  className?: string
}
export const NewFilms = ({ className }: INewFilmsProps) => {
  const { data, isSuccess } = useGetNewestQuery(1)
  console.log(data)
  return <div className={cn(className)}>NewFilms</div>
}
