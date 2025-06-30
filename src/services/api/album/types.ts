import type { IAlbum } from '@redux/reducers/album/types';

export interface IAlbumApi {
  getAlbumById: (id: string) => Promise<IAlbum>;
}
