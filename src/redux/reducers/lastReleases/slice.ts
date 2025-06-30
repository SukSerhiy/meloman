import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "services/api";
import type { ILastReleasesState, ILastReleasesParams } from "./types";

const initialState: ILastReleasesState = {
  loading: false,
  data: null,
};

export const fetchLastReleases = createAsyncThunk(
  "lastReleases/fetch",
  async ({ offset = 0, limit = 21 }: ILastReleasesParams = {}) => {
    return await await api.lastReleases.getLastReleases({ offset, limit });
  }
);

export const todosSlice = createSlice({
  name: "lastReleases",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchLastReleases.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchLastReleases.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.data = payload;
    });
    builder.addCase(fetchLastReleases.rejected, (state) => {
      state.loading = false;
    });
  },
});

export default todosSlice.reducer;
