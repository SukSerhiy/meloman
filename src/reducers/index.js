import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import global from './global'
import auth from './auth'
// import album from './album'
import album from '../ui/pages/Album/albumSlice'
import artists from '../ui/pages/Artists/artistsSlice'
import albums from '../ui/pages/Albums/albumsSlice'
import artist from './artist'
import lastReleases from '../ui/pages/LastReleases/lastReleasesSlice'

export default combineReducers({
  routing: routerReducer,
  global,
  auth,
  lastReleases,
  album,
  artists,
  artist,
  albums,
})
