import { createSelector } from '@reduxjs/toolkit';
import { ISearchState, TSearchResponse } from './types';
import { IStoreState } from '../../types';

const getState = (state: IStoreState): ISearchState => state.search;

export const getSearchLoading = createSelector(
	[getState],
	(state: ISearchState): boolean => state.loading,
);

export const getAlbumsResults = createSelector(
	[getState],
	(state: ISearchState): TSearchResponse | null => state.albumResults,
);

export const getArtistsResults = createSelector(
	[getState],
	(state: ISearchState): TSearchResponse | null => state.artistsResults,
);
