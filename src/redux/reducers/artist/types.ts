import type { IArtist, IAlbum } from '../../generalTypes';

export interface IArtistState {
  loading: boolean;
  topTracksLoading: boolean;
  albumsLoading: boolean;
  relatedArtistsLoading: boolean;
  artistData: IArtist | null;
  topTracks: ITopTracksResponse | null;
  albums: IArtistAlbumsResponse | null;
  relatedArtists: any | null;
}

export interface ITopTracksParams {
  id: string;
  market?: string;
}

export interface IArtistAlbumsParams {
  id: string;
  offset?: number;
  limit?: number;
}

export interface ITopTracksResponse {
  tracks: ITrack[];
}

export interface ITrack {
  id: string;
  name: string;
  preview_url: string | null;
}

export interface IArtistAlbumsResponse {
  items: IAlbum[];
  offset: number;
  total: number;
}

export type { IArtist }
