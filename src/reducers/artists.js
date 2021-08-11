import { actionTypes } from '../actions/artists'

const defaultState = {
  loading: false,
  data: {
    items: [],
  },
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_ARTISTS_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case actionTypes.FETCH_ARTISTS_SUCCESS: {
      const artists = action.data ? action.data.artists : {}
      const { items } = artists
      return {
        ...state,
        loading: false,
        data: {
          ...artists,
          items,
        },
      }
    }
    case actionTypes.FETCH_ARTISTS_ERROR:
      return {
        ...state,
        loading: false,
      }
    case actionTypes.CLEAR_ARTISTS: {
      return {
        ...state,
        data: {
          items: [],
        },
      }
    }
    default:
      return state
  }
}
