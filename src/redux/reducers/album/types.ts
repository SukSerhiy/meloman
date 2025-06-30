import type { IAlbum } from "../../generalTypes";

export interface IAlbumState {
  loading: boolean;
  data: IAlbum | null;
}

export type { IAlbum };
