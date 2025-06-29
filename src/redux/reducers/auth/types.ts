export interface IAuthState {
  refreshLoading: boolean;
  accessToken: string | null;
  expiresIn: number | null;
  lastRefreshDate: number | null;
}
