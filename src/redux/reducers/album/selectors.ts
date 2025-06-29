import { createSelector } from '@reduxjs/toolkit';
import type { IAlbumState, IAlbum } from './types';
import type { IStoreState } from '../../types';

const getState = (state: IStoreState): IAlbumState => state.album;

export const getAlbumLoading = createSelector(
	[getState],
	(state: IAlbumState): boolean => state.loading,
);

export const getAlbumData = createSelector(
	[getState],
	(state: IAlbumState): IAlbum | null => state.data,
);
