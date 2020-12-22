import { getApi } from '../config'
import { setError } from './global'

export const actionTypes = {
  FETCH_ARTISTS_REQUEST: 'artists/FETCH_ARTISTS_REQUEST',
  FETCH_ARTISTS_SUCCESS: 'artists/FETCH_ARTISTS_SUCCESS',
  FETCH_ARTISTS_ERROR: 'artists/FETCH_ARTISTS_ERROR',
  CLEAR_ARTISTS: 'artists/CLEAR_ARTISTS',
}

export const fetchArtists = (searchStr) => (dispatch) => {
  dispatch({ type: actionTypes.FETCH_ARTISTS_REQUEST })
  getApi().fetchArtists(searchStr)
    .then((resp) => {
      dispatch({
        type: actionTypes.FETCH_ARTISTS_SUCCESS,
        data: resp.data,
      })
    })
    .catch((error) => {
      dispatch(setError(error))
      dispatch({
        type: actionTypes.FETCH_ARTISTS_ERROR,
        error,
      })
    })
}

export const clearArtists = () => ({
  type: actionTypes.CLEAR_ARTISTS,
})
