import type { IAuthState } from './reducers/auth/types';
import type { ILastReleasesState } from './reducers/lastReleases/types';
import type { IAlbumState } from './reducers/album/types';
import type { ISearchState } from './reducers/search/types';
import type { IArtistState } from './reducers/artist/types';

export interface IStoreState {
  auth: IAuthState;
  lastReleases: ILastReleasesState;
  album: IAlbumState;
  search: ISearchState;
  artist: IArtistState;
}
