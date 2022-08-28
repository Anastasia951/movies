import React from 'react'
import { ITitleVariant } from '../../types/ui'
import cn from 'classnames'
import styles from './Title.module.scss'
interface ITitleProps {
  children: React.ReactNode
  variant: ITitleVariant
}

export const Title = ({ children, variant }: ITitleProps) => {
  switch (variant) {
    case 'h1': {
      return <h1 className={cn(styles.h1)}>{children}</h1>
    }
    case 'h2': {
      return <h2 className={cn(styles.h2)}>{children}</h2>
    }
    case 'h3': {
      return <h3 className={cn(styles.h3)}>{children}</h3>
    }
    case 'h4': {
      return <h4 className={cn(styles.h4)}>{children}</h4>
    }
    case 'h5': {
      return <h5 className={cn(styles.h5)}>{children}</h5>
    }
    case 'h6': {
      return <h6 className={cn(styles.h6)}>{children}</h6>
    }
  }
}
