import { createSelector } from '@reduxjs/toolkit';
import type { IArtistState } from './types';
import type { IArtist, IAlbum } from '../../generalTypes';
import type { IStoreState } from '../../types';

const getState = (state: IStoreState): IArtistState => state.artist;

export const getArtistLoading = createSelector(
	[getState],
	(state: IArtistState): boolean => state.loading,
);

export const getTopTracksLoading = createSelector(
	[getState],
	(state: IArtistState): boolean => state.topTracksLoading,
);

export const getArtistAlbumsLoading = createSelector(
	[getState],
	(state: IArtistState): boolean => state.albumsLoading,
);

export const getRelatedArtistsLoading = createSelector(
	[getState],
	(state: IArtistState): boolean => state.relatedArtistsLoading,
);

export const getArtistData = createSelector(
	[getState],
	(state: IArtistState): IArtist | null => state.artistData,
);

export const getTopTracks = createSelector(
	[getState],
	(state: IArtistState): any | null => state.topTracks,
);

export const getArtistAlbums = createSelector(
	[getState],
	(state: IArtistState): any | null => state.albums,
);

export const getRelatedArtists = createSelector(
	[getState],
	(state: IArtistState): any | null => state.relatedArtists,
);
