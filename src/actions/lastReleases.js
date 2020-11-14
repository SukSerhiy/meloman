import { getApi } from '../config'
import { setError } from './global'

export const actionTypes = {
  FETCH_LAST_RELEASES_REQUEST: 'lastReleases/FETCH_LAST_RELEASES_REQUEST',
  FETCH_LAST_RELEASES_SUCCESS: 'lastReleases/FETCH_LAST_RELEASES_SUCCESS',
  FETCH_LAST_RELEASES_ERROR: 'lastReleases/FETCH_LAST_RELEASES_ERROR'
}

export const fetchLastReleases = () => dispatch => {
  dispatch({ type: actionTypes.FETCH_LAST_RELEASES_REQUEST })
  getApi().fetchLastReleases()
    .then(resp => {
      dispatch({ 
        type: actionTypes.FETCH_LAST_RELEASES_SUCCESS,
        data: resp.data
      })
    })
    .catch(error => {
      dispatch(setError(error))
      dispatch({ 
        type: actionTypes.FETCH_LAST_RELEASES_ERROR,
        error
      })
    })
}
