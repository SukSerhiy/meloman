import React, { useState } from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  gridItem: {
    width: 300,
    height: 300,
    margin: '30px 11%',
    position: 'relative',
    '&:nth-child(-n + 3)': {
      marginTop: 0,
    },
    '&:nth-child(3n), &:nth-child(3n+1)': {
      marginLeft: 0,
      marginRight: 0,
    },
  },
  gridItemCover: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    background: '#000000',
    cursor: 'pointer',
    opacity: 0.6,
  },
  gridContent: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: '5%',
    boxSizing: 'border-box',
    cursor: 'pointer',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffff',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: 'lightgrey',
    textAlign: 'center',
  },
})

const HoverableGridItem = (props) => {
  const classes = useStyles()
  const {
    id, imageUrl, title, subtitle, onClick = () => {}, classes: classesProp = {},
  } = props
  const [isShown, setIsShown] = useState(false)
  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <div
      role="gridcell"
      className={clsx(classes.gridItem, classesProp.root)}
      tabIndex={0}
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
      onClick={() => onClick(id)}
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {isShown && (
      <>
        <div className={clsx(classes.gridItemCover, classesProp.cover)} />
        <div className={classes.gridContent}>
          <span className={classes.title}>
            {title}
          </span>
          {subtitle && (
          <span className={classes.subtitle}>
            {subtitle}
          </span>
          )}
        </div>
      </>
      )}
    </div>
  )
}

export default HoverableGridItem
