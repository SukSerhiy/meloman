import { actionTypes } from '../actions/lastReleases'

const defaultState = {
  loading: false,
  data: {
    items: [],
  },
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_LAST_RELEASES_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case actionTypes.FETCH_LAST_RELEASES_SUCCESS: {
      const albums = action.data ? action.data.albums : {}
      return {
        ...state,
        loading: false,
        data: {
          ...albums,
          items: [...state.data.items, ...albums.items],
        },
      }
    }
    case actionTypes.FETCH_LAST_RELEASES_ERROR:
      return {
        ...state,
        loading: false,
      }
    default:
      return state
  }
}
