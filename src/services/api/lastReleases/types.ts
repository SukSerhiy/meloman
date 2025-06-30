import type { ILastReleasesParams, ILastReleasesResponse } from '@redux/reducers/lastReleases/types';

export interface ILastReleasesApi {
  getLastReleases: (params: ILastReleasesParams) => Promise<ILastReleasesResponse>;
}
