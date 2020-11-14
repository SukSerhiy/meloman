import axios from 'axios';

class Api {
  constructor({ apiHost, authApiHost, accessToken, refreshToken, clientKey }) {
    this._accessToken = accessToken
    this._refreshToken = refreshToken
    this._clientKey = clientKey

    this.axios = axios.create({
      baseURL: apiHost
    })

    this.axiosAuth = axios.create({
      baseURL: authApiHost
    })
  }

  async refreshToken() {
    const body = new URLSearchParams()
    body.append('grant_type', 'refresh_token')
    body.append('refresh_token', this._refreshToken)
    return await this.axiosAuth
      .post(
        '/api/token', body, {
          headers: {
            Authorization: `Basic ${this._clientKey}`
          }
        }
      )
  }

  async fetchLastReleases() {
   return await this.axios
      .get(`/v1/browse/new-releases`, {
        headers: {
          Authorization: `Bearer ${this._accessToken}`
        }
      })
  }
}

export default Api
