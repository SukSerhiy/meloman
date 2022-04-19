import { refreshToken } from '../redux/slices/auth'

const actionsBuffer = []
const actionsToRepeat = []
let isTokenRefreshing = false
let isTokenRefreshed = false

const jwt = (store) => (next) => async (action) => {
  const { dispatch } = store
  const isError = action.type?.endsWith('/rejected')
  actionsBuffer.push(action)
  if (isError) {
    const isUnauthorized = action?.error?.message === 'Request failed with status code 401'
    if (isUnauthorized) {
      const { type } = action
      const actionMainPart = type.slice(0, type.lastIndexOf('/'))
      const requestStartAction = actionsBuffer.find((act) => act?.type === `${actionMainPart}/pending`)
      const asyncAction = actionsBuffer[actionsBuffer.indexOf(requestStartAction) - 1]
      if (!actionsToRepeat.includes(asyncAction)) {
        actionsToRepeat.push(asyncAction)
      }
      const needToRefresh = !(isTokenRefreshing || isTokenRefreshed)
      if (needToRefresh) {
        isTokenRefreshing = true
        await dispatch(refreshToken())
        isTokenRefreshing = false
        isTokenRefreshed = true
        if (isTokenRefreshed) {
          actionsToRepeat.forEach((_actions) => {
            _actions(dispatch)
          })
        }
      }
    }
  }
  return next(action)
}

export default jwt
