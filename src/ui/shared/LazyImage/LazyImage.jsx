import React, { useState } from 'react'
import clsx from 'clsx'
import useStyles from './styles'

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
