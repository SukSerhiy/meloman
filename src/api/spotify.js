import axios from 'axios'

class Api {
  constructor({
    apiHost,
    authApiHost,
    accessToken: _accessToken,
    refreshToken: _refreshToken,
    clientKey: _clientKey,
  }) {
    this.accessToken = _accessToken
    this.refreshToken = _refreshToken
    this.clientKey = _clientKey

    this.axios = axios.create({
      baseURL: apiHost,
    })

    this.axiosAuth = axios.create({
      baseURL: authApiHost,
    })
  }

  set accessToken(_accessToken) {
    this.accessToken = _accessToken
  }

  async refreshToken() {
    const body = new URLSearchParams()
    body.append('grant_type', 'refresh_token')
    body.append('refresh_token', this.refreshToken)
    return this.axiosAuth
      .post(
        '/api/token', body, {
          headers: {
            Authorization: `Basic ${this.clientKey}`,
          },
        },
      )
  }

  async fetchLastReleases(options = {}) {
    const { offset = 0, limit = 20 } = options
    return this.axios
      .get(`/v1/browse/new-releases?offset=${offset}&limit=${limit}`, {
        headers: {
          Authorization: `Bearer ${this.accessToken}`,
        },
      })
  }

  async fetchAlbum(id) {
    return this.axios
      .get(`/v1/albums/${id}`, {
        headers: {
          Authorization: `Bearer ${this.accessToken}`,
        },
      })
  }

  async fetchArtists(searchStr) {
    return this.axios
      .get(`/v1/search?q=${encodeURIComponent(searchStr)}&type=artist`, {
        headers: {
          Authorization: `Bearer ${this.accessToken}`,
        },
      })
  }

  async fetchAlbums(searchStr) {
    return this.axios
      .get(`/v1/search?q=${encodeURIComponent(searchStr)}&type=album`, {
        headers: {
          Authorization: `Bearer ${this.accessToken}`,
        },
      })
  }

  async fetchArtist(id) {
    return this.axios
      .get(`/v1/artists/${id}`, {
        headers: {
          Authorization: `Bearer ${this.accessToken}`,
        },
      })
  }

  async fetchArtistTopTracks(id, market = 'UA') {
    return this.axios
      .get(`/v1/artists/${id}/top-tracks?market=${market}`, {
        headers: {
          Authorization: `Bearer ${this.accessToken}`,
        },
      })
  }

  async fetchArtistAlbums(id, offset = 0, limit = 20) {
    return this.axios
      .get(`/v1/artists/${id}/albums?offset=${offset}&limit=${limit}`, {
        headers: {
          Authorization: `Bearer ${this.accessToken}`,
        },
      })
  }

  async fetchRelatedArtists(id) {
    return this.axios
      .get(`/v1/artists/${id}/related-artists`, {
        headers: {
          Authorization: `Bearer ${this.accessToken}`,
        },
      })
  }
}

export default Api
