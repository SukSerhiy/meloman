import React, { useState } from 'react'
import clsx from 'clsx'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import useStyles from './styles';

const Card = ({
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
      <div className={classes.imgContainer}>
        <img src={imageUrl} className={clsx(classes.avatar, imgClassName)} alt="avatar" />
      </div>
      <span className={classes.title}>
        {title}
      </span>

      <span className={classes.subtitle}>
        {subtitle}
      </span>
    </Link>
  )
}

export default Card
