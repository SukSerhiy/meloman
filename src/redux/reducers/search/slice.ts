import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "services/api";
import type { ISearchState, ISearchParams } from "./types";
import { isAlbumsResults, isArtistsResults } from "./types";

const initialState: ISearchState = {
  loading: false,
  albumResults: null,
  artistsResults: null,
};

export const searchByText = createAsyncThunk(
  "search/fetch",
  async ({ text, category }: ISearchParams) => {
    return await await api.search.searchByText({ text, category });
  },
);

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    clearResults: (state) => {
      state.albumResults = null;
      state.artistsResults = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(searchByText.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(searchByText.fulfilled, (state, { payload }) => {
      state.loading = false;
      if (isAlbumsResults(payload)) {
        state.albumResults = payload;
      }
      if (isArtistsResults(payload)) {
        state.artistsResults = payload;
      }
    });
    builder.addCase(searchByText.rejected, (state) => {
      state.loading = false;
    });
  },
});

export const { clearResults } = searchSlice.actions;

export default searchSlice.reducer;
