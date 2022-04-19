import React from 'react'
import { Button } from '@material-ui/core'
import useStyles from './styles'

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
