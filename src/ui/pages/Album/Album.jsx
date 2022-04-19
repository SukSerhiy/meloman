import React, { useEffect, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams, Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import * as actions from '@redux/slices/album'
import TracksGroup from 'ui/shared/TracksGroup'
import SpotifyLink from 'ui/shared/SpotifyLink'
import useStyles from './styles';

const Album = () => {
  const { id } = useParams()
  const classes = useStyles()
  const dispatch = useDispatch()
  const { loading, data: album } = useSelector((store) => store.album)
  const tracks = album.tracks.items

  const fetchAlbum = useCallback((_id) => {
    dispatch(actions.fetchAlbum(_id))
  }, [dispatch])

  useEffect(() => {
    fetchAlbum(id)
  }, [fetchAlbum, id])

  const imageUrl = album.images && album.images[1]?.url
  if (loading) {
    return null
  }
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <img className={classes.coverImg} src={imageUrl} alt="cover" />
        <div className={classes.albumBody}>
          <div style={{ display: 'flex' }}>
            <span className={classes.albumName}>{album.name}</span>
            <SpotifyLink spotifyUrl={album?.external_urls?.spotify} />
          </div>
          {album.artists?.map((artist) => (
            <div key={artist.id}>
              <Link
                className={classes.artistLink}
                to={`/artists/${artist.id}`}
              >
                <span>{artist.name}</span>
              </Link>
              <SpotifyLink spotifyUrl={artist?.external_urls?.spotify} />
            </div>
          ))}
        </div>
      </div>
      <TracksGroup tracks={tracks} album={album} />
    </div>
  )
}

export default Album
