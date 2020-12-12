import Api from './api/spotify'
import { store } from '.'

let api

const createApi = () => {
  const apiHost = process.env.REACT_APP_API_HOST
  const authApiHost = process.env.REACT_APP_API_AUTH_HOST
  const { accessToken } = store.getState().auth
  const refreshToken = process.env.REACT_APP_REFRESH_TOKEN
  const clientKey = process.env.REACT_APP_CLIENT_KEY

  return new Api({
    apiHost,
    authApiHost,
    accessToken,
    refreshToken,
    clientKey,
  })
}

const getApi = () => {
  if (api) {
    return api
  }
  api = createApi()
  return api
}

export { getApi }
