import { actionTypes } from '../actions/album'

const defaultState = {
  loading: false,
  data: {
    tracks: {
      items: [],
      tracks: {},
    },
  },
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_ALBUM_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case actionTypes.FETCH_ALBUM_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.data,
      }
    case actionTypes.FETCH_ALBUM_ERROR:
      return {
        ...state,
        loading: false,
      }
    default:
      return state
  }
}
