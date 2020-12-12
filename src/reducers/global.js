import { actionTypes } from '../actions/global'

const defaultState = {
  loading: false,
  error: {},
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.SET_LOADING:
      return {
        ...state,
        loading: action.loading,
      }
    case actionTypes.SET_ERROR:
      return {
        ...state,
        error: action.error,
      }
    default:
      return state
  }
}
