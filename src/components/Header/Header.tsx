import React, { useState } from 'react'
import cn from 'classnames'
import { Link } from 'react-router-dom'
import { Logo } from './components/Logo/Logo'
import { Search } from './components/Search/Search'
import styles from './Header.module.scss'
import { Menu } from './components/Menu/Menu'
export const Header = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(false)
  return (
    <header className={cn(styles.header)}>
      <div className={cn('container', styles.container)}>
        <div className={cn(styles.left)}>
          <Logo openMenu={setIsMenuOpened} />
          <Menu
            className={cn({
              hidden: !isMenuOpened,
            })}
          />
        </div>
        <Search />
        <Link to='signin'>Sign In</Link>
      </div>
    </header>
  )
}
