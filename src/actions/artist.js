import { getApi } from '../config'
import { setError } from './global'

export const actionTypes = {
  FETCH_ARTIST_REQUEST: 'artist/FETCH_ARTIST_REQUEST',
  FETCH_ARTIST_SUCCESS: 'artist/FETCH_ARTIST_SUCCESS',
  FETCH_ARTIST_ERROR: 'artist/FETCH_ARTIST_ERROR',
  FETCH_TOP_TRACKS_REQUEST: 'artist/FETCH_TOP_TRACKS_REQUEST',
  FETCH_TOP_TRACKS_SUCCESS: 'artist/FETCH_TOP_TRACKS_SUCCESS',
  FETCH_TOP_TRACKS_ERROR: 'artist/FETCH_TOP_TRACKS_ERROR',
  FETCH_ALBUMS_REQUEST: 'artist/FETCH_ALBUMS_REQUEST',
  FETCH_ALBUMS_SUCCESS: 'artist/FETCH_ALBUMS_SUCCESS',
  FETCH_ALBUMS_ERROR: 'artist/FETCH_ALBUMS_ERROR',
  FETCH_RELATED_ARTISTS_REQUEST: 'artist/FETCH_RELATED_ARTISTS_REQUEST',
  FETCH_RELATED_ARTISTS_SUCCESS: 'artist/FETCH_RELATED_ARTISTS_SUCCESS',
  FETCH_RELATED_ARTISTS_ERROR: 'artist/FETCH_RELATED_ARTISTS_ERROR',
}

export const fetchArtist = (id) => (dispatch) => {
  dispatch({ type: actionTypes.FETCH_ARTIST_REQUEST })
  getApi().fetchArtist(id)
    .then((resp) => {
      dispatch({
        type: actionTypes.FETCH_ARTIST_SUCCESS,
        data: resp.data,
      })
    })
    .catch((error) => {
      dispatch(setError(error))
      dispatch({
        type: actionTypes.FETCH_ARTIST_ERROR,
        error,
      })
    })
}

export const fetchTopTracks = (id, market) => (dispatch) => {
  dispatch({ type: actionTypes.FETCH_TOP_TRACKS_REQUEST })
  getApi().fetchArtistTopTracks(id, market)
    .then((resp) => {
      dispatch({
        type: actionTypes.FETCH_TOP_TRACKS_SUCCESS,
        data: resp.data,
      })
    })
    .catch((error) => {
      dispatch(setError(error))
      dispatch({
        type: actionTypes.FETCH_TOP_TRACKS_ERROR,
        error,
      })
    })
}

export const fetchArtistAlbums = (artistId, offset = 0, limit = 20) => (dispatch) => {
  dispatch({ type: actionTypes.FETCH_ALBUMS_REQUEST })
  getApi().fetchArtistAlbums(artistId, offset, limit)
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

export const fetchRelatedArtists = (artistId) => (dispatch) => {
  dispatch({ type: actionTypes.FETCH_RELATED_ARTISTS_REQUEST })
  getApi().fetchRelatedArtists(artistId)
    .then((resp) => {
      dispatch({
        type: actionTypes.FETCH_RELATED_ARTISTS_SUCCESS,
        data: resp.data,
      })
    })
    .catch((error) => {
      dispatch(setError(error))
      dispatch({
        type: actionTypes.FETCH_RELATED_ARTISTS_ERROR,
        error,
      })
    })
}
