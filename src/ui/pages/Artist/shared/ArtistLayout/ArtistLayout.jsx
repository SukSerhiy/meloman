import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import LazyImage from 'ui/shared/LazyImage'
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
        backgroundImage: `url(${imageUrl}), linear-gradient(90deg, #c6c6c6, #292929 25%, #292929 75%, #c6c6c6)`,
      }}
    >
      <section className={classes.contentHeader}>
        <LazyImage src={imageUrl} className={classes.avatar} alt="artist" />
        <h2 className={classes.title}>{artist.name}</h2>
      </section>
      {children}
    </div>
  )
}

export default ArtistLayout
