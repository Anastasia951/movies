import React from 'react'
import { NewFilms } from '../../components/NewFilms/NewFilms'
import { PopularFilms } from '../../components/PopularFilms/PopularFilms'

import cn from 'classnames'
import styles from './Home.module.scss'

export const Home = () => {
  return (
    <div>
      <PopularFilms className={styles.section} />
      <NewFilms className={styles.section} />
    </div>
  )
}
