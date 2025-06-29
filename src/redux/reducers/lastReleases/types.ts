import type { IAlbum } from "../../generalTypes";

export interface ILastReleasesState {
  data: ILastReleasesResponse | null;
  loading: boolean;
}

export interface ILastReleasesParams {
  offset?: number;
  limit?: number;
}

export interface ILastReleasesResponse {
  albums: {
    total: number;
    limit: number;
    offset: number;
    items: IAlbum[];
  };
}
