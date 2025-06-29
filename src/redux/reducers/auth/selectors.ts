import { createSelector } from "@reduxjs/toolkit";
import type { IAuthState } from "./types";
import type { IStoreState } from "../../types";

const getAuthState = (state: IStoreState): IAuthState => state.auth;

export const getRefreshLoading = createSelector(
  [getAuthState],
  (state: IAuthState): boolean | null => state.refreshLoading
);

export const getAccessToken = createSelector(
  [getAuthState],
  (state: IAuthState): string | null => state.accessToken
);

export const getExpireTime = createSelector(
  [getAuthState],
  (state: IAuthState): number | null => state.expiresIn
);

export const getLastRefreshDate = createSelector(
  [getAuthState],
  (state: IAuthState): number | null => state.lastRefreshDate
);
