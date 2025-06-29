import { createSelector } from '@reduxjs/toolkit';
import type { ISearchState, TSearchResponse, ISearchResults } from './types';
import type { IStoreState } from '../../types';

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

export const getSearchResults = createSelector(
	[getState],
	(state: ISearchState): ISearchResults | null => state.searchResults,
);
