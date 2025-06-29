import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "services/api";
import type {
  IArtistState,
  ITopTracksParams,
  IArtistAlbumsParams,
} from "./types";

const initialState: IArtistState = {
  loading: false,
  topTracksLoading: false,
  albumsLoading: false,
  relatedArtistsLoading: false,
  artistData: null,
  topTracks: null,
  albums: null,
  relatedArtists: null,
};

export const fetchArtistData = createAsyncThunk(
  "artistData/fetch",
  async (id: string) => {
    return await await api.artist.getArtistById(id);
  },
);

export const fetchTopTracks = createAsyncThunk(
  "topTracks/fetch",
  async (params: ITopTracksParams) => {
    return await await api.artist.getTopTracks(params);
  },
);

export const fetchArtistAlbums = createAsyncThunk(
  "artistAlbums/fetch",
  async (params: IArtistAlbumsParams) => {
    return await await api.artist.getAlbums(params);
  },
);

export const fetchRelatedArtists = createAsyncThunk(
  "relatedArtists/fetch",
  async (id: string) => {
    return await await api.artist.getRelatedArtists(id);
  },
);

export const artistSlice = createSlice({
  name: "artist",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchArtistData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchArtistData.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.artistData = payload;
    });
    builder.addCase(fetchArtistData.rejected, (state) => {
      state.loading = false;
    });
    builder.addCase(fetchTopTracks.pending, (state) => {
      state.topTracksLoading = true;
    });
    builder.addCase(fetchTopTracks.fulfilled, (state, { payload }) => {
      state.topTracksLoading = false;
      state.topTracks = payload;
    });
    builder.addCase(fetchTopTracks.rejected, (state) => {
      state.topTracksLoading = false;
    });
    builder.addCase(fetchArtistAlbums.pending, (state) => {
      state.albumsLoading = true;
    });
    builder.addCase(fetchArtistAlbums.fulfilled, (state, { payload }) => {
      state.albumsLoading = false;
      state.albums = payload;
    });
    builder.addCase(fetchArtistAlbums.rejected, (state) => {
      state.albumsLoading = false;
    });
    builder.addCase(fetchRelatedArtists.pending, (state) => {
      state.relatedArtistsLoading = true;
    });
    builder.addCase(fetchRelatedArtists.fulfilled, (state, { payload }) => {
      state.relatedArtistsLoading = false;
      state.relatedArtists = payload;
    });
    builder.addCase(fetchRelatedArtists.rejected, (state) => {
      state.relatedArtistsLoading = false;
    });
  },
});

export default artistSlice.reducer;
