import { http } from "../../http/index";
import type { IAlbumApi } from "./types";

const albumApi: IAlbumApi = {
  getAlbumById: (id) =>
    http.get(`/v1/albums/${id}`).then((response) => response.data),
};

export default albumApi;
