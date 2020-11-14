import React, { Component } from 'react'

class LastReleases extends Component {
  componentDidMount() {
    this.props.fetchLastReleases()
  }
  render() {
    return <div>Last releases</div>
  }
}

export default LastReleases
