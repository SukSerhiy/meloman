import React from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import HomeIcon from '../../assets/icons/home.svg'

const useStyles = makeStyles({
  root: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'black',
    padding: '20px 0px',
  },
  link: {
    padding: '0px 2%',
    textDecoration: 'none',
    fontSize: 20,
    color: '#918888',
  },
})

const routeLinks = [
  {
    to: '/albums',
    label: 'Albums',
  },
  {
    to: '/artists',
    label: 'Artists',
  },
]

const Menu = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Link
        to="/"
        className={classes.link}
      >
        <img src={HomeIcon} alt="home" />
      </Link>
      {routeLinks.map((l, key) => (
        <Link
          // eslint-disable-next-line react/no-array-index-key
          key={key}
          className={classes.link}
          to={l.to}
        >
          {l.label}
        </Link>
      ))}
    </div>
  )
}

export default Menu
