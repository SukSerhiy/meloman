import { actionTypes } from '../actions/artist'

const defaultState = {
  loading: false,
  data: {},
  topTracks: [],
  albums: {
    items: [],
    previous: null,
    next: null,
    offset: null,
    total: null,
  },
  relatedArtists: [],
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_ARTIST_REQUEST:
    case actionTypes.FETCH_TOP_TRACKS_REQUEST:
    case actionTypes.FETCH_ALBUMS_REQUEST:
    case actionTypes.FETCH_RELATED_ARTISTS_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case actionTypes.FETCH_ARTIST_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.data,
      }
    case actionTypes.FETCH_TOP_TRACKS_SUCCESS:
      return {
        ...state,
        loading: false,
        topTracks: action.data?.tracks,
      }
    case actionTypes.FETCH_ALBUMS_SUCCESS:
      return {
        ...state,
        loading: false,
        albums: action.data,
      }
    case actionTypes.FETCH_RELATED_ARTISTS_SUCCESS:
      return {
        ...state,
        loading: false,
        relatedArtists: action.data?.artists,
      }
    case actionTypes.FETCH_ARTIST_ERROR:
    case actionTypes.FETCH_TOP_TRACKS_ERROR:
    case actionTypes.FETCH_ALBUMS_ERROR:
    case actionTypes.FETCH_RELATED_ARTISTS_ERROR:
      return {
        ...state,
        loading: false,
      }
    default:
      return state
  }
}
