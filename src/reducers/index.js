import { combineReducers } from 'redux'
import global from './global'
import auth from './auth'
import lastReleases from './lastReleases'

export default combineReducers({
  global,
  auth,
  lastReleases
})
