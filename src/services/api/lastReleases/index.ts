import { http } from "../../http/index";
import type { ILastReleasesApi } from "./types";

const lastReleasesApi: ILastReleasesApi = {
  getLastReleases: ({ offset = 0, limit = 21 }) =>
    http
      .get(`/v1/browse/new-releases?offset=${offset}&limit=${limit}`)
      .then((response) => response.data),
};

export default lastReleasesApi;
