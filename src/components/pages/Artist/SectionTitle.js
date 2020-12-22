import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { ButtonBase } from '@material-ui/core'

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  showAll: {
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
        <ButtonBase className={classes.showAll} onClick={onShowAllClick}>
          <span>{showAllBtnText}</span>
        </ButtonBase>
      )}
    </div>
  )
}

export default SectionTitle
