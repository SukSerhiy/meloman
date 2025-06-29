import type { IAuthApi } from "./auth/types";
import type { ILastReleasesApi } from "./lastReleases/types";
import type { IAlbumApi } from "./album/types";
import type { ISearchApi } from "./search/types";
import type { IArtistApi } from './artist/types';

export interface IApi {
  auth: IAuthApi;
  lastReleases: ILastReleasesApi;
  album: IAlbumApi;
  search: ISearchApi;
  artist: IArtistApi;
}
