import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getApi } from '../../../config'

export const initialState = {
  loading: false,
  data: {
    items: [],
  },
  hasErrors: false,
}

export const fetchAlbums = createAsyncThunk(
  'albums/fetch',
  async (searchStr = '') => {
    const resp = await getApi().fetchAlbums(searchStr)
    return resp.data
  },
)

const albumsSlice = createSlice({
  name: 'albums',
  initialState,
  reducers: {
    clearAlbums: (state) => {
      state.data.items = []
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAlbums.pending, (state) => {
      state.loading = true
    })
    builder.addCase(fetchAlbums.fulfilled, (state, { payload }) => {
      state.loading = false
      state.data = payload.albums
      state.hasErrors = false
    })
    builder.addCase(fetchAlbums.rejected, (state) => {
      state.loading = false
      state.hasErrors = true
    })
  },
})

export const { clearAlbums } = albumsSlice.actions

export default albumsSlice.reducer
