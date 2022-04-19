import React, { useState, useEffect } from 'react'
import clsx from 'clsx'
import { NavLink } from 'react-router-dom'
import { IconButton } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import { routeLinks } from './constants';
import useStyles from './styles'

const SideMenu = () => {
  const classes = useStyles()
  const [isActive, setIsActive] = useState(false)

  const handleOpenClick = () => {
    setIsActive((prev) => !prev)
  }

  const handleAnyClick = (e) => {
    const { path } = e
    const navElement = path.find(((p) => p.id === 'nav-menu'))
    if (!navElement) {
      setIsActive(false)
    }
  }

  const handleMenuItemClick = () => {
    setIsActive(false)
  }

  useEffect(() => {
    window.addEventListener('click', handleAnyClick)
    return () => {
      window.removeEventListener('click', handleAnyClick)
    }
  }, [])

  return (
    <div id="nav-menu">
      <IconButton
        className={classes.menuIconBtn}
        onClick={handleOpenClick}
      >
        <MenuIcon className={classes.menuIcon} />
      </IconButton>
      <nav className={clsx(classes.menu, isActive ? classes.menuActive : '')}>
        {routeLinks.map((l) => (
          <div className={classes.item} key={l.to}>
            {l.icon}
            <NavLink
              className={classes.link}
              activeClassName={classes.activeLink}
              to={l.to}
              exact={!!l.exact}
              onClick={handleMenuItemClick}
            >
              {l.label}
            </NavLink>
          </div>
        ))}
      </nav>
    </div>
  )
}

export default SideMenu
