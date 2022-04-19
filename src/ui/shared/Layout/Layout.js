import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Header from 'ui/shared/Header'
import styles from './styles';

const Layout = ({ classes, children }) => (
  <>
    <Header />
    <main className={classes.main}>
      {children}
    </main>
  </>
)

export default withStyles(styles)(Layout)
