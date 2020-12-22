import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import {
  // BrowserRouter as Router,
  HashRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import LastReleases from '../containers/LastReleases'
import Albums from '../containers/Albums'
import Artists from '../containers/Artists'
import Artist from '../containers/Artist'
import ArtistAlbums from '../containers/ArtistAlbums'
import RelatedArtists from '../containers/RelatedArtists'
import Album from '../containers/Album'
import Header from './shared/Header'
import Menu from './shared/Menu'

const styles = {
  main: {
    height: 'calc(100% - 200px)',
  },
}

class App extends Component {
  render() {
    const { classes } = this.props
    return (
      <Router>
        <Header />
        <main className={classes.main}>
          <Menu />
          <Switch>
            <Route path="/" exact component={LastReleases} />
            <Route path="/albums/:id" render={(props) => <Album {...props} />} />
            <Route path="/albums" render={(props) => <Albums {...props} />} />
            <Route path="/artists/:id" exact render={(props) => <Artist {...props} />} />
            <Route path="/artists/:id/albums" render={(props) => <ArtistAlbums {...props} />} />
            <Route path="/artists/:id/related" render={(props) => <RelatedArtists {...props} />} />
            <Route path="/artists" component={Artists} />
          </Switch>
        </main>
      </Router>
    )
  }
}

export default withStyles(styles)(App)
