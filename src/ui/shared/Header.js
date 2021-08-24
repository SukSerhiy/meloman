import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'
import Menu from './SideMenu'

const useStyles = makeStyles({
  root: {
    height: 85,
    display: 'flex',
    alignItems: 'center',
    padding: '0px 1.5%',
    backgroundColor: '#565a8a',
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
})

const Header = () => {
  const classes = useStyles()
  return (
    <header className={classes.root}>
      <Menu />
      <Link to="/" className={classes.headerTitle}>Meloman</Link>
    </header>
  )
}

export default Header
