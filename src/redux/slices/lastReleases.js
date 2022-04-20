import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { toggleLoading } from './loading'
import api from '../../api/spotify'

const initialState = {
  data: {
    items: [],
  },
  hasErrors: false,
}

export const fetchLastReleases = createAsyncThunk(
  'lastReleases/fetch',
  async ({ offset = 0, limit = 21 } = {}, thunkAPI) => {
    // try {
      // thunkAPI.dispatch(toggleLoading())
      const resp = await api.fetchLastReleases({ offset, limit })
      // thunkAPI.dispatch(toggleLoading())
      return resp.data
    // } catch (err) {
    //   thunkAPI.dispatch(toggleLoading())
    //   throw err
    // }
  },
)

const lastReleasesSlice = createSlice({
  name: 'lastReleases',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchLastReleases.fulfilled, (state, { payload }) => {
      state.data = payload.albums
    })
  },
})

export default lastReleasesSlice.reducer
