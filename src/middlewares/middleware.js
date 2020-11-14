import { refreshToken } from '../actions/auth'
// import { actionTypes } from '../actions/global'

let buffer = []

const middleware = store => next => action => {
  if (action.type === 'global/SET_ERROR') {
    if (
      action.error && 
      action.error.response && 
      action.error.response.status === 401
    ) {
      store.dispatch(refreshToken())
    }
  }
  buffer.push(action);
  return next(action)
}

export default middleware
