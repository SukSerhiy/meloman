import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import LazyImage from 'ui/shared/LazyImage'
import SpotifyLink from 'ui/shared/SpotifyLink'
import useStyles from './styles'

const ArtistLayout = ({
  loading, artist, fetchArtist, children,
}) => {
  const classes = useStyles()
  const { id } = useParams()
  const imageUrl = artist.images && artist.images[0]?.url
  useEffect(() => {
    if (!loading && artist.data?.id !== id) {
      fetchArtist(id)
    }
  }, [
    fetchArtist,
    id,
  ])
  return (
    <div
      className={classes.root}
      style={{
        // backgroundImage: `url(${imageUrl})`,
      }}
    >
        <LazyImage src={imageUrl} className={classes.avatar} alt="artist" />
        <div className={classes.titleContainer}>
          <h2 className={classes.title}>{artist.name}</h2>
          <SpotifyLink spotifyUrl={artist?.external_urls?.spotify} />
        </div>
      {children}
    </div>
  )
}

export default ArtistLayout
