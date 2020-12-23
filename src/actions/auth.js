import { getApi } from '../config'

export const actionTypes = {
  TOKEN_REFRESHING: 'auth/TOKEN_REFRESHING',
  TOKEN_REFRESHED: 'auth/TOKEN_REFRESHED',
}

const setAuthData = (params) => ({
  type: actionTypes.TOKEN_REFRESHED,
  ...params,
})

export const refreshToken = () => (dispatch) => {
  dispatch({ type: actionTypes.TOKEN_REFRESHING })
  const api = getApi()
  return api.refreshToken()
    .then((resp) => (
      new Promise((resolve) => {
        const {
          data: {
            access_token: accessToken,
            expires_in: expiresIn,
            token_type: tokenType,
          },
        } = resp
        dispatch(setAuthData({
          accessToken,
          expiresIn,
          tokenType,
        }))
        api.accessToken = accessToken
        resolve()
      })
    ))
}
