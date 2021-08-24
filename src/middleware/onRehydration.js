import api from '../api/spotify'

const onRehydration = () => (next) => (action) => {
  if (action.type === 'persist/REHYDRATE') {
    const { accessToken } = action.payload.auth
    api.accessToken = accessToken
  }
  return next(action)
}

export default onRehydration
