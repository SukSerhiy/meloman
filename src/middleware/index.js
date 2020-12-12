import { refreshToken } from '../actions/auth'

const actionsBuffer = []

export const jwt = (store) => (next) => (action) => {
  const { dispatch } = store
  actionsBuffer.push(action)
  if (action.type?.endsWith('_ERROR') && action?.type !== 'global/SET_ERROR') {
    const status = action?.error?.response?.status
    if (status === 401) {
      const beforeRequestAction = actionsBuffer.find((act) => act?.type?.endsWith('_REQUEST'))
      const requestAction = actionsBuffer[actionsBuffer.indexOf(beforeRequestAction) - 1]
      return dispatch(refreshToken())
        .then(() => {
          requestAction(dispatch)
          return next(action)
        })
    }
  }
  return next(action)
}
