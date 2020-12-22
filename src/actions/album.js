import { getApi } from '../config'
import { setError } from './global'

export const actionTypes = {
  FETCH_ALBUM_REQUEST: 'album/FETCH_ALBUM_REQUEST',
  FETCH_ALBUM_SUCCESS: 'album/FETCH_ALBUM_SUCCESS',
  FETCH_ALBUM_ERROR: 'album/FETCH_ALBUM_ERROR',
}

export const fetchAlbum = (id) => (dispatch) => {
  dispatch({ type: actionTypes.FETCH_ALBUM_REQUEST })
  getApi().fetchAlbum(id)
    .then((resp) => {
      dispatch({
        type: actionTypes.FETCH_ALBUM_SUCCESS,
        data: resp.data,
      })
    })
    .catch((error) => {
      dispatch(setError(error))
      dispatch({
        type: actionTypes.FETCH_ALBUM_ERROR,
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
