import React from 'react'
import clsx from 'clsx'
import { NavLink, useHistory } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import { IconButton } from '@material-ui/core'
import LeftArrowIcon from '../../assets/icons/left-arrow.svg'

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#afaaf3',
    padding: '20px 0.5%',
    fontWeight: 600,
    height: 50,
    position: 'relative',
    zIndex: 2,
  },
  link: {
    textDecoration: 'none',
    fontSize: 20,
    color: '#fff3f3',
    letterSpacing: 0.5,
    '&:not(:last-child)': {
      paddingRight: '2%',
    },
  },
  goBackButton: {
    margin: '0px 10px',
    opacity: 1,
    transition: 'all 0.3s ease 0s',
  },
  goBackHidden: {
    width: 0,
    opacity: 0,
    visibility: 'hidden',
  },
}))

const routeLinks = [
  {
    to: '/albums',
    label: 'Albums',
  },
  {
    to: '/artists',
    label: 'Artists',
  },
  {
    to: '/',
    label: 'Last Relases',
  },
]

const Menu = () => {
  const classes = useStyles()
  const history = useHistory()
  return (
    <nav className={classes.root}>
      <IconButton
        onClick={() => history.goBack()}
        className={clsx(
          classes.goBackButton,
          history.location.pathname === '/' ? classes.goBackHidden : '',
        )}
      >
        <img src={LeftArrowIcon} style={{ width: 30 }} alt="back" />
      </IconButton>
      {routeLinks.map((l, key) => (
        <NavLink
          // eslint-disable-next-line react/no-array-index-key
          key={key}
          className={classes.link}
          to={l.to}
        >
          {l.label}
        </NavLink>
      ))}
    </nav>
  )
}

export default Menu
