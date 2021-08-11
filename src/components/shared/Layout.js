import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Header from './Header'
import Menu from './MenuBar'

const styles = {
  main: {
    height: 'calc(100% - 60px)',
  },
}

const Layout = ({ classes, children }) => (
  <>
    <Header />
    <main className={classes.main}>
      <Menu />
      {children}
    </main>
  </>
)

export default withStyles(styles)(Layout)
