export interface IRefreshTokenResponse {
  access_token: string;
  expires_in: number;
}

export interface IAuthApi {
  refreshToken: () => Promise<IRefreshTokenResponse>;
}
