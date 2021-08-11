import React from 'react'
import { Route } from 'react-router-dom'
import Layout from '../shared/Layout'

const LayoutRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => (
      <Layout>
        <Component {...props} />
      </Layout>
    )}
  />
)

export default LayoutRoute
