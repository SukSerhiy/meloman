import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "services/api";
import type { IAlbumState } from "./types";

const initialState: IAlbumState = {
  loading: true,
  data: null,
};

export const fetchAlbumData = createAsyncThunk(
  "lastReleases/fetch",
  async (id: string) => {
    return await await api.album.getAlbumById(id);
  }
);

export const albumSlice = createSlice({
  name: "album",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAlbumData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchAlbumData.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.data = payload;
    });
    builder.addCase(fetchAlbumData.rejected, (state) => {
      state.loading = false;
    });
  },
});

export default albumSlice.reducer;
