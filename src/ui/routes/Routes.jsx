import React from 'react'
import {
  HashRouter as Router,
  Switch,
} from 'react-router-dom'
import LastReleases from 'ui/pages/LastReleases'
import Albums from 'ui/pages/Albums'
import Artists from 'ui/pages/Artists'
import Artist from 'ui/pages/Artist'
import Album from 'ui/pages/Album'
import ArtistAlbums from 'ui/pages/Artist/components/Albums'
import RelatedArtists from 'ui/pages/Artist/components/RelatedArtists'
import LayoutRoute from './LayoutRoute'

const App = ({ history }) => (
  <Router history={history}>
    <Switch>
      <LayoutRoute path="/albums/:id" component={Album} />
      <LayoutRoute path="/albums" component={Albums} />
      <LayoutRoute path="/artists/:id/albums" component={ArtistAlbums} />
      <LayoutRoute path="/artists/:id/related" component={RelatedArtists} />
      <LayoutRoute path="/artists/:id" component={Artist} />
      <LayoutRoute path="/artists" component={Artists} />
      <LayoutRoute path="/" component={LastReleases} />
    </Switch>
  </Router>
)

export default App
