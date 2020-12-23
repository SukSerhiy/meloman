import { refreshToken } from '../actions/auth'

const actionsBuffer = []
const actionsToRepeat = []
let isTokenRefreshing = false
let isTokenRefreshed = false

export const jwt = (store) => (next) => async (action) => {
  const { dispatch } = store
  const isError = action.type?.endsWith('_ERROR') && action?.type !== 'global/SET_ERROR'
  actionsBuffer.push(action)
  if (isError) {
    const isUnauthorized = action?.error?.response?.status === 401
    // Произошла ошибка 401
    if (isUnauthorized) {
      const { type } = action
      const actionMainPart = type.slice(0, type.lastIndexOf('_'))
      const requestStartAction = actionsBuffer.find((act) => act?.type === `${actionMainPart}_REQUEST`)
      const asyncAction = actionsBuffer[actionsBuffer.indexOf(requestStartAction) - 1]
      if (!actionsToRepeat.includes(asyncAction)) {
        actionsToRepeat.push(asyncAction)
      }
      // Начинаем делать рефреш токена
      const needToRefresh = !(isTokenRefreshing || isTokenRefreshed)
      if (needToRefresh) {
        isTokenRefreshing = true
        await dispatch(refreshToken())
        isTokenRefreshing = false
        isTokenRefreshed = true
        if (isTokenRefreshed) {
          actionsToRepeat.forEach((_actionToRepeat) => {
            _actionToRepeat(dispatch)
          })
        }
      }
    }
  }
  return next(action)
}
