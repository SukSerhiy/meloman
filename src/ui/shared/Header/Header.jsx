import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useSelector } from 'react-redux'
import { LinearProgress } from '@material-ui/core'
import { Link } from 'react-router-dom'
import Menu from 'ui/shared/SideMenu'
import useStyles from './styles'

const Header = () => {
  const classes = useStyles()
  const loading = useSelector((store) => store.loading)
  return (
    <header className={classes.root}>
      <div className={classes.mainContent}>
        <Menu />
        <Link to="/" className={classes.headerTitle}>Meloman</Link>
      </div>
      {loading && (<LinearProgress />)}
    </header>
  )
}

export default Header
