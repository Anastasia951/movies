import React from 'react'
import { AiOutlineHome } from 'react-icons/ai'
import { ImFilm } from 'react-icons/im'
import { FiMonitor } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import cn from 'classnames'
import styles from './Menu.module.scss'

interface IMenuProps {
  className: string
}

export const Menu = ({ className }: IMenuProps) => {
  return (
    <ul className={cn(styles[className], styles.list)}>
      <li className={cn(styles.listItem)}>
        <AiOutlineHome />
        <Link to='/'>Home</Link>
      </li>
      <li className={cn(styles.listItem)}>
        <ImFilm />
        <Link to='/'>Films</Link>
      </li>
      <li className={cn(styles.listItem)}>
        <FiMonitor />
        <Link to='/'>TV Shows</Link>
      </li>
    </ul>
  )
}
