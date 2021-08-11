import React, { useState } from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
// import LazyLoad from 'react-lazyload'

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    width: '100%',
    height: '100%',
    overflow: 'hidden',
  },
  loading: {
    height: '100%',
    width: '100%',
    position: 'absolute',
    top: 0,
    right: '-90%',
    background: 'linear-gradient(to left, transparent 0%, #26b3ff17 50%, transparent 100%)',
    animation: `$load 1s ${theme.transitions.easing.easeInOut} infinite`,
  },
  img: {
    display: 'none',
    height: '100%',
    width: '100%',
    objectFit: 'cover',
  },
  imgLoaded: {
    display: 'block',
  },
  '@keyframes load': {
    '0%': {
      right: -'100%',
    },
    '100%': {
      right: '100%',
    },
  },
}))

const LazyImage = ({
  className = '', style = {}, src, alt,
}) => {
  const [isLoading, setLoaded] = useState(true)
  const classes = useStyles()
  return (
    <div className={clsx(classes.root, className)} style={style}>
      {isLoading ? <div className={classes.loading} /> : null}
      <img
        src={src}
        className={clsx(classes.img, !isLoading && classes.imgLoaded)}
        onLoad={() => setLoaded(false)}
        alt={alt}
      />
    </div>
  )
}

export default LazyImage
