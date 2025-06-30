import auth from './auth';
import lastReleases from './lastReleases';
import album from './album';
import search from './search';
import artist from './artist';
import type { IApi } from './types';

export const api: IApi = {
  auth,
  lastReleases,
  album,
  search,
  artist,
}