import LastReleases from 'ui/pages/LastReleases'
import Albums from 'ui/pages/Albums'
import Artists from 'ui/pages/Artists'
import Artist from 'ui/pages/Artist'
import Album from 'ui/pages/Album'
import ArtistAlbums from 'ui/pages/Artist/components/Albums'
import RelatedArtists from 'ui/pages/Artist/components/RelatedArtists'
import LayoutRoute from './LayoutRoute'

export const ROUTES = {
  home: '/',
  albums: '/albums',
  album: '/albums/:id',
  artists: '/artists',
  artist: '/artists/:id',
  artistAlbums: '/artists/:id/albums',
  artistRelated: '/artists/:id/related'
}

export const routeComponents = [
  {
    path: ROUTES.album,
    page: Album,
    routeComponent: LayoutRoute
  },
  {
    path: ROUTES.albums,
    page: Albums,
    routeComponent: LayoutRoute
  },
  {
    path: ROUTES.artistAlbums,
    page: ArtistAlbums,
    routeComponent: LayoutRoute
  },
  {
    path: ROUTES.artistRelated,
    page: RelatedArtists,
    routeComponent: LayoutRoute
  },
  {
    path: ROUTES.artist,
    page: Artist,
    routeComponent: LayoutRoute
  },
  {
    path: ROUTES.artists,
    page: Artists,
    routeComponent: LayoutRoute
  },
  {
    path: ROUTES.home,
    page: LastReleases,
    routeComponent: LayoutRoute
  }
];