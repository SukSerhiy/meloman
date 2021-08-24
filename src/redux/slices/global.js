import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loading: false,
  error: {},
}

const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    setLoading: (state, { payload }) => {
      state.loading = payload
    },
    setError: (state, { paylaod }) => {
      state.error = paylaod
    },
  },
})

export const { setLoading, setError } = globalSlice.actions

export default globalSlice.reducer
