import { TRACK_STATUSES } from '../../../constants'

const trackId1 = 'trackId1'
const trackId2 = 'trackId2'

export const trackMock1 = {
  id: trackId1,
  name: 'Track Name 1',
  track: {
    preview_url: 'previewUrl 1',
  },
}

export const trackMock2 = {
  id: trackId2,
  name: 'Track Name 2',
  track: {
    preview_url: null,
  },
}

export const currentPausedMock = {
  id: trackId1,
  status: TRACK_STATUSES.PAUSED,
}

export const currentPlayingMock = {
  id: trackId1,
  status: TRACK_STATUSES.PLAYING,
}

export const currentCompletedMock = {
  id: trackId1,
  status: TRACK_STATUSES.COMPLETED,
}

export const albumMock = {
  id: 'albumId',
  name: 'album name',
  images: [{ url: 'imageUrl' }],
}
