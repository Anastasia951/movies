import React from 'react'
import styles from './Grid.module.scss'
import cn from 'classnames'

interface IGridProps {
  children: React.ReactNode
}

export const Grid = ({ children }: IGridProps) => {
  return <div className={cn(styles.gridContainer)}>{children}</div>
}
