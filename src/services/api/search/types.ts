import type { ISearchParams, TSearchResponse } from '@redux/reducers/search/types';

export interface ISearchApi {
  searchByText: (params: ISearchParams) => Promise<TSearchResponse>;
}
