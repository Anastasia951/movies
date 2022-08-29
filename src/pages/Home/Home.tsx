import React from 'react'
import { TopRated } from '../../components/TopRated/TopRated'
import { PopularFilms } from '../../components/PopularFilms/PopularFilms'

import cn from 'classnames'
import styles from './Home.module.scss'

export const Home = () => {
  return (
    <div>
      <PopularFilms className={cn(styles.section)} />
      <TopRated className={cn(styles.section)} />
    </div>
  )
}
