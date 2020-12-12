import { actionTypes } from '../actions/auth'

const defaultState = {
  accessToken: null,
  expiresIn: 3600,
  tokenType: 'Bearer',
  refreshedIn: null,
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.TOKEN_REFRESHING:
      return {
        ...state,
        refreshedIn: new Date(),
      }
    case actionTypes.TOKEN_REFRESHED: {
      const { accessToken, expiresIn, tokenType } = action
      return {
        ...state,
        accessToken,
        expiresIn,
        tokenType,
      }
    }
    default:
      return state
  }
}
