import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "services/api";
import type { IAuthState } from "./types";

const initialState: IAuthState = {
  refreshLoading: false,
  accessToken: null,
  expiresIn: null,
  lastRefreshDate: null,
};

export const refreshToken = createAsyncThunk("auth/refresh", async () => {
  const result = await api.auth.refreshToken();
  return result;
});

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(refreshToken.pending, (state) => {
      state.refreshLoading = true;
    });
    builder.addCase(refreshToken.fulfilled, (state, { payload }) => {
      const { access_token, expires_in } = payload;
      state.refreshLoading = false;
      state.accessToken = access_token;
      state.expiresIn = expires_in;
      state.lastRefreshDate = new Date().getTime();
    });
    builder.addCase(refreshToken.rejected, (state) => {
      state.refreshLoading = false;
    });
  },
});

export default authSlice.reducer
