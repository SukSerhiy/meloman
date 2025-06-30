import type { IArtist, IAlbum, ITrack } from '../../generalTypes';

export interface IArtistState {
  loading: boolean;
  topTracksLoading: boolean;
  albumsLoading: boolean;
  relatedArtistsLoading: boolean;
  artistData: IArtist | null;
  topTracks: ITopTracksResponse | null;
  albums: IArtistAlbumsResponse | null;
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

export interface IArtistAlbumsResponse {
  items: IAlbum[];
  limit: number;
  offset: number;
  total: number;
}

export type { IArtist }
