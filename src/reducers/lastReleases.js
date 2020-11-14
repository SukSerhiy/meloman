import { actionTypes } from '../actions/lastReleases'

const defaultState = {
  loading: false,
  data: {}
}

console.log('actionTypes', actionTypes)

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_LAST_RELEASES_REQUEST:
      return {
        ...state,
        loading: true
      }
    case actionTypes.FETCH_LAST_RELEASES_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.data
      }
    case actionTypes.FETCH_LAST_RELEASES_ERROR:
      return {
        ...state,
        loading: false
      }
    default:
      return state
  }
}
