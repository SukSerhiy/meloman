import { http } from "../../http/index";
import type { IArtistApi } from "./types";

const artistApi: IArtistApi = {
  getArtistById: (id) =>
    http.get(`/v1/artists/${id}`).then((response) => response.data),
  getTopTracks: ({ id, market = "UA" }) =>
    http
      .get(`/v1/artists/${id}/top-tracks?market=${market}`)
      .then((response) => response.data),
  getAlbums: ({ id, offset = 0, limit = 20 }) =>
    http
      .get(`/v1/artists/${id}/albums?offset=${offset}&limit=${limit}`)
      .then((response) => response.data),
  getRelatedArtists: (id: string) =>
    http
      .get(`/v1/artists/${id}/related-artists`)
      .then((response) => response.data),
};

export default artistApi;
