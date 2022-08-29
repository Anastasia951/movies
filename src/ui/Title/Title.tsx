import React from 'react'
import { ITitleVariant } from '../../types/ui'
import cn from 'classnames'
import styles from './Title.module.scss'
interface ITitleProps {
  children: React.ReactNode
  variant: ITitleVariant
  className?: string
}

export const Title = ({ children, variant, className = '' }: ITitleProps) => {
  switch (variant) {
    case 'h1': {
      return <h1 className={cn(styles.h1, className)}>{children}</h1>
    }
    case 'h2': {
      return <h2 className={cn(styles.h2, className)}>{children}</h2>
    }
    case 'h3': {
      return <h3 className={cn(styles.h3, className)}>{children}</h3>
    }
    case 'h4': {
      return <h4 className={cn(styles.h4, className)}>{children}</h4>
    }
    case 'h5': {
      return <h5 className={cn(styles.h5, className)}>{children}</h5>
    }
    case 'h6': {
      return <h6 className={cn(styles.h6, className)}>{children}</h6>
    }
  }
}
