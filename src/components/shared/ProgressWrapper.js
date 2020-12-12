import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { CircularProgress } from '@material-ui/core'

const styles = {
  progress: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}

const ProgressWrapper = (props) => {
  const { classes, loading, children } = props
  return (
    <>
      {loading ? (
        <div className={classes.progress}>
          <CircularProgress />
        </div>
      ) : children}
    </>
  )
}

export default withStyles(styles)(ProgressWrapper)
