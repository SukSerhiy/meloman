import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Header from './Header'

const styles = {
  main: {
    height: 'calc(100% - 60px)',
  },
}

const Layout = ({ classes, children }) => (
  <>
    <Header />
    <main className={classes.main}>
      {children}
    </main>
  </>
)

export default withStyles(styles)(Layout)
