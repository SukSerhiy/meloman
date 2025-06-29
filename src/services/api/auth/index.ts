import { httpAuth, REFRESH_TOKEN } from "../../http/index";
import type { IAuthApi } from "./types";

const body = new URLSearchParams();
body.append("grant_type", "refresh_token");
body.append("refresh_token", REFRESH_TOKEN);

const authApi: IAuthApi = {
  refreshToken: () =>
    httpAuth
      .post("/api/token", body)
      .then((response) => response.data),
};

export default authApi;
