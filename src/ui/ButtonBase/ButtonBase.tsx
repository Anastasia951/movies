import React from 'react'
import cn from 'classnames'
import styles from './ButtonBase.module.scss'
interface IButtonProps {
  children: React.ReactNode
}

export const ButtonBase = ({ children }: IButtonProps) => {
  return <button className={cn(styles.button)}>{children}</button>
}
