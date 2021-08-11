import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'

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
})

const Header = () => {
  const classes = useStyles()
  return (
    <header className={classes.root}>
      <Link to="/" className={classes.headerTitle}>Meloman</Link>
    </header>
  )
}

export default Header
