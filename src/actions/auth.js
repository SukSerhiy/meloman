import { getApi } from '../config'
import { setLoading, setError } from './global' 

export const actionTypes = {
  SET_ACCESS_TOKEN: 'auth/SET_ACCESS_TOKEN'
}

const setAccessToken = token => ({
  type: actionTypes.SET_ACCESS_TOKEN,
  token
})

export const refreshToken = () => dispatch => {
  getApi().refreshToken().then(resp => {
    const { data: { access_token } } = resp
    dispatch(setAccessToken(access_token))
  })
  .catch(err => {
  })
}
