import React from 'react'
import {
  HashRouter as Router,
  Switch,
} from 'react-router-dom'
import { routeComponents } from './dictionaries'

const Routes = ({ history }) => (
  <Router history={history}>
    <Switch>
      {routeComponents.map(({ routeComponent: Route, path, page }) => (
        <Route path={path} page={page} />
      ))}
    </Switch>
  </Router>
)

export default Routes
