import { createSelector } from "@reduxjs/toolkit";
import type { ILastReleasesState, ILastReleasesResponse } from "./types";
import type { IStoreState } from "../../types";

const getState = (state: IStoreState): ILastReleasesState => state.lastReleases;

export const getLastReleasesLoading = createSelector(
  [getState],
  (state: ILastReleasesState): boolean => state.loading
);

export const getLastReleases = createSelector(
  [getState],
  (state: ILastReleasesState): ILastReleasesResponse | null => state.data
);
