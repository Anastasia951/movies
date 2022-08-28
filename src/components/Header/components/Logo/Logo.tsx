import React, { Dispatch, SetStateAction } from 'react'
import { FiMenu } from 'react-icons/fi'
import cn from 'classnames'
import styles from './Logo.module.scss'

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
      <h1 className={cn(styles.title)}>Moovies</h1>
    </div>
  )
}
