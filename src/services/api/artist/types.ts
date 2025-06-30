import type { ITopTracksParams, IArtistAlbumsParams, IArtist } from '@redux/reducers/artist/types';

export interface IArtistApi {
  getArtistById: (id: string) => Promise<IArtist>;
  getTopTracks: (params: ITopTracksParams) => Promise<any>;
  getAlbums: (params: IArtistAlbumsParams) => Promise<any>;
  getRelatedArtists: (id: string) => Promise<any>;
}
