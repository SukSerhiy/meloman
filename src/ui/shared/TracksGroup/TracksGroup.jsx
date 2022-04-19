import React, { useEffect, useState } from 'react'
import Track from 'ui/shared/Track'
import { TRACK_STATUSES } from '../constants'

const TracksGroup = (props) => {
  const { tracks, ...rest } = props
  const [currentTrack, setCurrentTrack] = useState({
    id: null,
    status: null,
  })

  const handlePlay = (id) => {
    if (currentTrack.id === id) {
      setCurrentTrack({
        ...currentTrack,
        id,
        status: currentTrack.status === TRACK_STATUSES.PLAYING
          ? TRACK_STATUSES.PAUSED : TRACK_STATUSES.PLAYING,
      })
    } else {
      setCurrentTrack({
        ...currentTrack,
        id,
        status: TRACK_STATUSES.PLAYING,
      })
    }
  }

  const handleEnd = (id) => {
    setCurrentTrack({
      ...currentTrack,
      id,
      status: currentTrack.status === TRACK_STATUSES.COMPLETED,
    })
  }

  useEffect(() => {
  }, [currentTrack])

  return (
    <>
      {tracks.map((track) => (
        <Track
          key={track.id}
          track={track}
          currentTrack={currentTrack}
          onPlay={handlePlay}
          onEnd={handleEnd}
          album={props.album}
          {...rest}
        />
      ))}
    </>
  )
}

export default TracksGroup
