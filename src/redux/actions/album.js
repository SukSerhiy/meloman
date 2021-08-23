import { createAsyncThunk } from '@reduxjs/toolkit'
import { getApi } from '../../config'

export const fetchAlbum = createAsyncThunk(
  'album/fetch',
  async (id = '') => {
    const resp = await getApi().fetchAlbum(id)
    return resp.data
  },
)
