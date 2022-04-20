import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Header from 'ui/shared/Header'
import styles from './styles';

const Layout = ({ classes, children }) => (
  <div className={classes.app}>
    <Header />
    <main className={classes.main}>
      {children}
    </main>
  </div>
)

export default withStyles(styles)(Layout)
