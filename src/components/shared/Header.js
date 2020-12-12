import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'

const useStyles = makeStyles({
  root: {
    height: 60,
    display: 'flex',
    alignItems: 'center',
    padding: '0px 1.5%',
    backgroundColor: '#6f00ff',
    backgroundImage: 'linear-gradient(45deg, #6f00ff 0%, transparent, #6f00ff 90%)',
  },
  headerTitle: {
    fontSize: 25,
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
