import { actionTypes } from '../actions/albums'

const defaultState = {
  loading: false,
  data: {
    items: [],
  },
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_ALBUMS_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case actionTypes.FETCH_ALBUMS_SUCCESS: {
      const albums = action.data ? action.data.albums : {}
      return {
        ...state,
        loading: false,
        data: {
          ...albums,
          items: albums.items,
        },
      }
    }
    case actionTypes.FETCH_ALBUMS_ERROR:
      return {
        ...state,
        loading: false,
      }
    case actionTypes.CLEAR_ALBUMS: {
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
