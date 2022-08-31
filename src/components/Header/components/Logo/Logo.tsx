import React, { Dispatch, SetStateAction } from 'react'
import { FiMenu } from 'react-icons/fi'
import cn from 'classnames'
import styles from './Logo.module.scss'
import { Link } from 'react-router-dom'
import { routes } from '../../../../routes/routes'

interface ILogoProps {
  openMenu: Dispatch<SetStateAction<boolean>>
}

export const Logo = ({ openMenu }: ILogoProps) => {
  return (
    <div className={cn(styles.logo)}>
      <FiMenu
        className={cn(styles.logoIcon)}
        onClick={() => openMenu(prev => !prev)}
      />
      <Link to={routes.Home}>
        <h1 className={cn(styles.title)}>Moovies</h1>
      </Link>
    </div>
  )
}
