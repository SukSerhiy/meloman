import type { IAlbum } from "../../generalTypes";

export interface ISearchState {
  loading: boolean;
  albumResults: IAlbumsResults | null;
  artistsResults: IArtistsResults | null;
}

export interface ISearchParams {
  text: string;
  category: TSearchCategory;
  offset?: number;
  limit?: number;
}

export type TSearchCategory = "artist" | "album";

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
    items: IAlbum[];
    offset: number;
    limit: number;
    total: number;
  };
}

export type TSearchResponse = IAlbumsResults | IArtistsResults;

export function isAlbumsResults(data: TSearchResponse): data is IAlbumsResults {
  return (data as IAlbumsResults).albums !== undefined;
}

export function isArtistsResults(
  data: TSearchResponse
): data is IArtistsResults {
  return (data as IArtistsResults).artists !== undefined;
}
