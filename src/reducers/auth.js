import { actionTypes } from '../actions/auth'

const defaultState = {
  accessToken: null
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.SET_ACCESS_TOKEN:
      return {
        ...state,
        accessToken: action.token
      }
    default:
      return state
  }
}
