import React, { useState } from 'react'
import clsx from 'clsx'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  root: {
    padding: '20px 30px',
    position: 'relative',
    borderRadius: 10,
    backgroundColor: '#5c68a9',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textDecoration: 'none',
    transition: 'all 0.1s ease 0s',
    '&._hover': {
      transform: 'scale(1.009)',
    },
  },
  avatar: {
    width: '100%',
    borderRadius: 10,
    objectFit: 'cover',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffff',
    textAlign: 'center',
    margin: '10px 0px 0px 0px',
  },
  subtitle: {
    fontSize: 16,
    color: 'lightgrey',
    textAlign: 'center',
    margin: '10px 0px 0px 0px',
  },
})

const HoverableCard = ({
  imageUrl, title, subtitle, to, imgClassName = '',
}) => {
  const classes = useStyles()
  const [showCover, onShowCover] = useState(false)

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <Link
      role="gridcell"
      className={clsx(classes.root, showCover ? '_hover' : '')}
      onMouseEnter={() => onShowCover(true)}
      onMouseLeave={() => onShowCover(false)}
      tabIndex={0}
      to={to}
    >
      <img src={imageUrl} className={clsx(classes.avatar, imgClassName)} alt="avatar" />
      <span className={classes.title}>
        {title}
      </span>

      <span className={classes.subtitle}>
        {subtitle}
      </span>
    </Link>
  )
}

export default HoverableCard
