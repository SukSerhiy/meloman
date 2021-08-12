import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'
import { IconButton } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import Menu from './MenuBar'

const useStyles = makeStyles({
  root: {
    height: 85,
    display: 'flex',
    alignItems: 'center',
    padding: '0px 1.5%',
    // backgroundColor: '#000000bf',
    backgroundColor: '#565a8a',
    // backgroundImage: 'linear-gradient(45deg, #6f00ff 0%, transparent, #6f00ff 90%)',
    position: 'relative',
    zIndex: 2,
  },
  headerTitle: {
    fontSize: 30,
    letterSpacing: 2,
    fontWeight: 'bold',
    color: '#fff',
    textDecoration: 'none',
  },
  menuIcon: {
    fontSize: '40px',
    color: '#fff',
  },
})

const Header = () => {
  const classes = useStyles()
  const [menuActive, setMenuActive] = useState(false)
  return (
    <header className={classes.root}>
      <IconButton onClick={() => setMenuActive((prev) => !prev)}>
        <MenuIcon className={classes.menuIcon} />
      </IconButton>
      <Link to="/" className={classes.headerTitle}>Meloman</Link>
      <Menu isActive={menuActive} />
    </header>
  )
}

export default Header
