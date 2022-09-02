import React, { HTMLAttributes, MutableRefObject } from 'react'
import cn from 'classnames'
import styles from './ButtonBase.module.scss'
interface IButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  onClick?: () => void
  ref?: MutableRefObject<any>
}

export const ButtonBase = ({ children, onClick, ref }: IButtonProps) => {
  return (
    <button ref={ref} onClick={onClick} className={cn(styles.button)}>
      {children}
    </button>
  )
}
