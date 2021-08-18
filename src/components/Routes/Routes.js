import React from 'react'
import {
  HashRouter as Router,
  Switch,
} from 'react-router-dom'
import LastReleases from '../pages/LastReleases'
import Albums from '../../containers/Albums'
import Artists from '../../containers/Artists'
import Artist from '../../containers/Artist'
import ArtistAlbums from '../../containers/ArtistAlbums'
import RelatedArtists from '../../containers/RelatedArtists'
import Album from '../../containers/Album'
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
