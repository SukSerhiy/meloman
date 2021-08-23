import { createSlice } from '@reduxjs/toolkit'
import { fetchAlbum } from '../actions/album'

const initialState = {
  loading: false,
  data: {
    tracks: {
      items: [],
      tracks: {},
    },
  },
  hasErrors: false,
}

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
