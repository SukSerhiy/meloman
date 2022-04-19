import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import auth from './slices/auth'
import album from './slices/album'
import artists from './slices/artists'
import albums from './slices/albums'
import artist from './slices/artist'
import lastReleases from './slices/lastReleases'
import loading from './slices/loading'

export default combineReducers({
  routing: routerReducer,
  auth,
  lastReleases,
  album,
  artists,
  artist,
  albums,
  loading,
})
