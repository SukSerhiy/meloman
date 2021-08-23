import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getApi } from '../../../config'

export const initialState = {
  loading: false,
  data: {
    items: [],
  },
  hasErrors: false,
}

export const fetchArtists = createAsyncThunk(
  'artists/fetch',
  async (searchStr = '') => {
    const resp = await getApi().fetchArtists(searchStr)
    return resp.data
  },
)

const artistsSlice = createSlice({
  name: 'artists',
  initialState,
  reducers: {
    clearArtists: (state) => {
      state.data.items = []
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchArtists.pending, (state) => {
      state.loading = true
    })
    builder.addCase(fetchArtists.fulfilled, (state, { payload }) => {
      state.loading = false
      state.data = payload.artists
      state.hasErrors = false
    })
    builder.addCase(fetchArtists.rejected, (state) => {
      state.loading = false
      state.hasErrors = true
    })
  },
})

export const { clearArtists } = artistsSlice.actions

export default artistsSlice.reducer
