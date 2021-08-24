import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import api from '../../api/spotify'

const initialState = {
  loading: false,
  data: {
    items: [],
  },
  hasErrors: false,
}

export const fetchLastReleases = createAsyncThunk(
  'lastReleases/fetch',
  async ({ offset = 0, limit = 20 } = {}) => {
    const resp = await api.fetchLastReleases({ offset, limit })
    return resp.data
  },
)

const lastReleasesSlice = createSlice({
  name: 'lastReleases',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchLastReleases.pending, (state) => {
      state.loading = true
    })
    builder.addCase(fetchLastReleases.fulfilled, (state, { payload }) => {
      state.loading = false
      state.data = payload.albums
      state.hasErrors = false
    })
    builder.addCase(fetchLastReleases.rejected, (state) => {
      state.loading = false
      state.hasErrors = true
    })
  },
})

export default lastReleasesSlice.reducer
