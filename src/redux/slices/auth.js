import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import api from '../../api/spotify'

const initialState = {
  accessToken: null,
  expiresIn: 3600,
  tokenType: 'Bearer',
  refreshedIn: null,
  hasErrors: false,
}

export const refreshToken = createAsyncThunk(
  'auth/refreshToken',
  async () => {
    const resp = await api.refreshToken()
    return resp.data
  },
)

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(refreshToken.pending, (state) => {
      state.refreshedIn = new Date()
    })
    builder.addCase(refreshToken.fulfilled, (state, { payload }) => {
      const {
        access_token: accessToken,
        expires_in: expiresIn,
        token_type: tokenType,
      } = payload
      state.accessToken = accessToken
      state.expiresIn = expiresIn
      state.tokenType = tokenType
      state.hasErrors = false
      api.accessToken = accessToken
    })
    builder.addCase(refreshToken.rejected, (state) => {
      state.hasErrors = true
    })
  },
})

export default authSlice.reducer
