import { getApi } from '../config'
import { setError } from './global'

export const actionTypes = {
  FETCH_ARTISTS_REQUEST: 'album/FETCH_ARTISTS_REQUEST',
  FETCH_ARTISTS_SUCCESS: 'album/FETCH_ARTISTS_SUCCESS',
  FETCH_ARTISTS_ERROR: 'album/FETCH_ARTISTS_ERROR',
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

// export const fetchTracks = id => dispatch => {
//   dispatch({ type: actionTypes.FETCH_ALBUM_REQUEST })
//   getApi().fetchTracks(id)
//     .then(resp => {
//       dispatch({
//         type: actionTypes.FETCH_ALBUM_SUCCESS,
//         data: resp.data
//       })
//     })
//     .catch(error => {
//       dispatch(setError(error))
//       dispatch({
//         type: actionTypes.FETCH_ALBUM_ERROR,
//         error
//       })
//     })
// }
