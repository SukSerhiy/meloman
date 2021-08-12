import React from 'react'
import clsx from 'clsx'
import { NavLink, useHistory } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import { IconButton } from '@material-ui/core'
import FiberNewIcon from '@material-ui/icons/FiberNew'
import AlbumIcon from '@material-ui/icons/Album'
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople'

const useStyles = makeStyles(() => ({
  menu: {
    position: 'absolute',
    height: '100vh',
    width: '400px',
    top: 85,
    left: '-400px',
    backgroundColor: '#565a8a',
    display: 'flex',
    flexDirection: 'column',
    transition: 'all 0.3s ease',
  },
  menuActive: {
    left: 0,
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

const Menu = ({ isActive }) => {
  const classes = useStyles()
  return (
    <nav className={clsx(classes.menu, isActive ? classes.menuActive : '')}>
      {routeLinks.map((l) => (
        <div className={classes.item}>
          {l.icon}
          <NavLink
            key={l.to}
            className={classes.link}
            to={l.to}
          >
            {l.label}
          </NavLink>
        </div>
      ))}
    </nav>
  )
}

export default Menu
