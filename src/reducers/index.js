import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import global from './global'
import auth from './auth'
import lastReleases from './lastReleases'
import album from './album'
import artists from './artists'
import albums from './albums'
import artist from './artist'

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
