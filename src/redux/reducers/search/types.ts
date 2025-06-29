import type { IAlbum, IArtist, ITrack } from "../../generalTypes";

export interface ISearchState {
  loading: boolean;
  albumResults: IAlbumsResults | null;
  artistsResults: IArtistsResults | null;
  searchResults: ISearchResults | null;
}

export interface ISearchParams {
  text: string;
  category: string;
  offset?: number;
  limit?: number;
}

export interface IAlbumsResults {
  albums: {
    items: IAlbum[];
    offset: number;
    limit: number;
    total: number;
  };
}

export interface IArtistsResults {
  artists: {
    items: IArtist[];
    offset: number;
    limit: number;
    total: number;
  };
}

export interface ISearchResults {
  artists?: {
    items: IArtist[];
    offset: number;
    limit: number;
    total: number;
  };
  albums?: {
    items: IAlbum[];
    offset: number;
    limit: number;
    total: number;
  };
  tracks?: {
    items: ITrack[];
    offset: number;
    limit: number;
    total: number;
  }
}

export type TSearchResponse = ISearchResults;

export function isAlbumsResults(data: TSearchResponse): data is IAlbumsResults {
  return (data as IAlbumsResults).albums !== undefined;
}

export function isArtistsResults(
  data: TSearchResponse
): data is IArtistsResults {
  return (data as IArtistsResults).artists !== undefined;
}
