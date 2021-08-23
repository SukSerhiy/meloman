import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Button } from '@material-ui/core'

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  showAll: {
    textTransform: 'capitalize',
    fontWeight: 'bold',
    fontSize: 17,
  },
})

const SectionTitle = (props) => {
  const classes = useStyles()
  const {
    title,
    isShowAllBtn = true,
    showAllBtnText = 'Show all',
    onShowAllClick = () => {},
  } = props
  return (
    <div className={classes.root}>
      <h2>{title}</h2>
      {isShowAllBtn && (
        <Button className={classes.showAll} onClick={onShowAllClick}>
          <span>{showAllBtnText}</span>
        </Button>
      )}
    </div>
  )
}

export default SectionTitle
