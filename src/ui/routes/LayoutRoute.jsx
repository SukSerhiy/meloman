import React from 'react'
import { Route } from 'react-router-dom'
import Layout from 'ui/shared/Layout'

const LayoutRoute = ({ page: Page, ...rest }) => (
  <Route
    {...rest}
    render={(props) => (
      <Layout>
        <Page {...props} />
      </Layout>
    )}
  />
)

export default LayoutRoute
