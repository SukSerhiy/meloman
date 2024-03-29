import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import api from '../../api/spotify'

const initialState = {
  loading: false,
  data: {},
  topTracks: [],
  albums: {
    items: [],
    previous: null,
    next: null,
    offset: null,
    total: null,
  },
  relatedArtists: [],
  hasErrors: false,
}

export const fetchArtist = createAsyncThunk(
  'artist/fetch',
  async (id = '') => {
    const resp = await api.fetchArtist(id)
    return resp.data
  },
)

export const fetchTopTracks = createAsyncThunk(
  'artist/top-tracks/fetch',
  async ({ id, market }) => {
    const resp = await api.fetchTopTracks(id, market)
    return resp.data
  },
)

export const fetchArtistAlbums = createAsyncThunk(
  'artist/albums/fetch',
  async ({ artistId, offset = 0, limit = 20 }) => {
    const resp = await api.fetchArtistAlbums(artistId, offset, limit)
    return resp.data
  },
)

export const fetchRelatedArtists = createAsyncThunk(
  'artist/related-artists/fetch',
  async (artistId) => {
    const resp = await api.fetchRelatedArtists(artistId)
    return resp.data
  },
)

const artistSlice = createSlice({
  name: 'artist',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchArtist.fulfilled, (state, { payload }) => {
      state.loading = false
      state.data = payload
      state.hasErrors = false
    })
    builder.addCase(fetchTopTracks.fulfilled, (state, { payload }) => {
      state.loading = false
      state.topTracks = payload.tracks
      state.hasErrors = false
    })
    builder.addCase(fetchArtistAlbums.fulfilled, (state, { payload }) => {
      state.loading = false
      state.albums = payload
      state.hasErrors = false
    })
    builder.addCase(fetchRelatedArtists.fulfilled, (state, { payload }) => {
      state.loading = false
      state.relatedArtists = payload.artists
      state.hasErrors = false
    })
    builder.addMatcher(
      (action) => /^artist\/\w+\/pending$/.test(action.type),
      (state) => {
        state.loading = true
      },
    )
    builder.addMatcher(
      (action) => /^artist\/\w+\/rejected$/.test(action.type),
      (state) => {
        state.loading = false
        state.hasErrors = true
      },
    )
  },
})

export default artistSlice.reducer
