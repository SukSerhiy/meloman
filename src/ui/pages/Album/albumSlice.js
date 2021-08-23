import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getApi } from '../../../config'

export const initialState = {
  loading: false,
  data: {
    tracks: {
      items: [],
      tracks: {},
    },
  },
  hasErrors: false,
}

export const fetchAlbum = createAsyncThunk(
  'album/fetch',
  async (id = '') => {
    const resp = await getApi().fetchAlbum(id)
    return resp.data
  },
)

const albumSlice = createSlice({
  name: 'album',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchAlbum.pending, (state) => {
      state.loading = true
    })
    builder.addCase(fetchAlbum.fulfilled, (state, { payload }) => {
      state.loading = false
      state.data = payload
      state.hasErrors = false
    })
    builder.addCase(fetchAlbum.rejected, (state) => {
      state.loading = false
      state.hasErrors = true
    })
  },
})

export default albumSlice.reducer
