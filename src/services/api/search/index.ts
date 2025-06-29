import { http } from "../../http/index";
import type { ISearchApi } from "./types";

const searchApi: ISearchApi = {
  searchByText: ({ text, category, offset = 0, limit = 20 }) =>
    http
      .get(
        `/v1/search?q=${encodeURIComponent(
          text
        )}&type=${category}&offset=${offset}&limit=${limit}`
      )
      .then((response) => response.data),
};

export default searchApi;
