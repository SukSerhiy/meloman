import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import global from './slices/global'
import auth from './slices/auth'
import album from './slices/album'
import artists from './slices/artists'
import albums from './slices/albums'
import artist from './slices/artist'
import lastReleases from './slices/lastReleases'

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
