import React, { HTMLAttributes } from 'react'
import cn from 'classnames'
import styles from './ButtonBase.module.scss'
interface IButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  onClick?: () => void
}

export const ButtonBase = ({ children, onClick }: IButtonProps) => {
  return (
    <button onClick={onClick} className={cn(styles.button)}>
      {children}
    </button>
  )
}
