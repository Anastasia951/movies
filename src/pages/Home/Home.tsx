import React from 'react'
import { NewFilms } from '../../components/NewFilms/NewFilms'
import { PopularFilms } from '../../components/PopularFilms/PopularFilms'

export const Home = () => {
  return (
    <div>
      <PopularFilms />
      <NewFilms />
    </div>
  )
}
