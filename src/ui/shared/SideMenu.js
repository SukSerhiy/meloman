import React, { useState, useEffect } from 'react'
import clsx from 'clsx'
import { NavLink } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import { IconButton } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import AlbumIcon from '@material-ui/icons/Album'
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople'

const useStyles = makeStyles((theme) => ({
  menuIconBtn: {
    transition: 'all 0.2s ease',
    '&:hover': {
      transform: 'scale(1.1)',
    },
  },
  menuIcon: {
    fontSize: '40px',
    color: '#fff',
  },
  menu: {
    position: 'absolute',
    opacity: 0,
    backgroundColor: '#565a8a',
    display: 'flex',
    flexDirection: 'column',
    transition: 'all 0.3s ease',
    [theme.breakpoints.up('sm')]: {
      paddingTop: 20,
      left: '-400px',
      width: '400px',
      height: '100vh',
    },
    [theme.breakpoints.down('sm')]: {
      top: '-100%',
      width: '100%',
      left: 0,
      height: '20vh',
    },
  },
  menuActive: {
    opacity: 1,
    [theme.breakpoints.up('sm')]: {
      left: 0,
    },
    [theme.breakpoints.down('sm')]: {
      top: 85,
    },
  },
  item: {
    display: 'flex',
    alignItems: 'center',
    padding: '10px 20px',
  },
  link: {
    fontSize: '1.4em',
    color: '#fff',
    fontWeight: 700,
    textDecoration: 'none',
    letterSpacing: '1px',
    marginLeft: 10,
  },
  activeLink: {
    color: 'yellow',
  },
}))

const styleSheet = {
  itemIcon: {
    color: '#ffff',
  },
}

const routeLinks = [
  {
    to: '/albums',
    icon: <AlbumIcon style={styleSheet.itemIcon} />,
    label: 'Search Albums',
  },
  {
    to: '/artists',
    icon: <EmojiPeopleIcon style={styleSheet.itemIcon} />,
    label: 'Search Artists',
  },
]

const Menu = () => {
  const classes = useStyles()
  const [isActive, setIsActive] = useState(false)

  const handleClick = (e) => {
    const { path } = e
    const navElement = path.find(((p) => p.id === 'nav-menu'))
    if (!navElement) {
      setIsActive(false)
    }
  }

  useEffect(() => {
    window.addEventListener('click', handleClick)
    return () => {
      window.removeEventListener('click', handleClick)
    }
  }, [])

  return (
    <div id="nav-menu">
      <IconButton
        className={classes.menuIconBtn}
        onClick={() => setIsActive((prev) => !prev)}
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
            >
              {l.label}
            </NavLink>
          </div>
        ))}
      </nav>
    </div>
  )
}

export default Menu
