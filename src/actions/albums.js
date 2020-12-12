import { getApi } from '../config'
import { setError } from './global'

export const actionTypes = {
  FETCH_ALBUMS_REQUEST: 'albums/FETCH_ALBUMS_REQUEST',
  FETCH_ALBUMS_SUCCESS: 'albums/FETCH_ALBUMS_SUCCESS',
  FETCH_ALBUMS_ERROR: 'albums/FETCH_ALBUMS_ERROR',
  CLEAR_ALBUMS: 'albums/CLEAR_ALBUMS',
}

export const fetchAlbums = (searchStr) => (dispatch) => {
  dispatch({ type: actionTypes.FETCH_ALBUMS_REQUEST })
  getApi().fetchAlbums(searchStr)
    .then((resp) => {
      dispatch({
        type: actionTypes.FETCH_ALBUMS_SUCCESS,
        data: resp.data,
      })
    })
    .catch((error) => {
      dispatch(setError(error))
      dispatch({
        type: actionTypes.FETCH_ALBUMS_ERROR,
        error,
      })
    })
}

export const clearAlbums = () => ({
  type: actionTypes.CLEAR_ALBUMS,
})
