import { createSlice } from '@reduxjs/toolkit'
import { isPending, isFulfilled, isRejected } from 'utils/acionType'

export const loadingSlice = createSlice({
  name: 'loading',
  initialState: false,
  reducers: {
    toggleLoading: (loading) => !loading,
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      (action) => isPending(action),
      (state) => true,
    )
    builder.addMatcher(
      (action) => isFulfilled(action),
      (state) => false,
    )
    builder.addMatcher(
      (action) => isRejected(action),
      (state) => false,
    )
  },
})

export const { toggleLoading } = loadingSlice.actions

export default loadingSlice.reducer
