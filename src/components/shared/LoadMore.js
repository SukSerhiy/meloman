import React from 'react'
import { CircularProgress } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import LoadMoreImg from '../../assets/icons/reload.svg'

const useStyles = makeStyles({
  root: {
    width: '100%',
    backgroundColor: '#7D87EE',
    color: '#ffff',
    display: 'flex',
    marginTop: 21,
    '&:hover': {
      backgroundColor: '#7D87EE',
      opacity: 0.7,
    },
  },
  img: {
    width: 30,
    padding: '3px 0px',
  },
  circularProgress: {
    color: '#ffff',
  },
  text: {
    marginLeft: 25,
  },
})

const LoadMore = (props) => {
  const classes = useStyles()
  const { loading, onClick } = props
  return (
    <Button
      variant="contained"
      className={classes.root}
      onClick={onClick}
    >
      {loading ? (
        <CircularProgress className={classes.circularProgress} size={25} />
      ) : (
        <img className={classes.img} src={LoadMoreImg} alt="load more" />
      )}
      <span className={classes.text}>Load More</span>
    </Button>
  )
}

export default LoadMore
