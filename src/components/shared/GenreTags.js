import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  item: {
    backgroundColor: '#c4f0ff',
    padding: '2px 10px',
    opacity: 0.8,
    fontSize: 14,
    margin: '2px 10px 2px 0px',
    '&:last-child': {
      marginRight: 0,
    },
  },
})

const GenreTags = (props) => {
  const classes = useStyles()
  const { items = [] } = props
  return (
    <div className={classes.root}>
      {items.map((item) => (
        <div key={item} className={classes.item}>
          <span>{item}</span>
        </div>
      ))}
    </div>
  )
}

export default GenreTags
