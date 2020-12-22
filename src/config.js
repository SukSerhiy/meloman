import Api from './api/spotify'
import { store } from '.'

let api

const createApi = () => {
  const apiHost = process.env.API_HOST
  const authApiHost = process.env.API_AUTH_HOST
  const { accessToken } = store.getState().auth
  const refreshToken = process.env.REFRESH_TOKEN
  const clientKey = process.env.CLIENT_KEY

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
