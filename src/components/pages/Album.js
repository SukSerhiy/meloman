import React, { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import ProgressWrapper from '../shared/ProgressWrapper'
import TracksGroup from '../shared/TracksGroup'

const useStyles = makeStyles({
  root: {
    padding: '20px 16%',
    backgroundColor: '#e5e5e5',
    height: '100%',
    overflow: 'auto',
  },
  artist: {
    fontWeight: 'bold',
    color: '#483b03',
    textDecoration: 'none',
    marginBottom: 4,
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  albumHeader: {
    display: 'flex',
    justifyContent: 'center',
  },
  albumHeadeContent: {
    flex: 1,
    marginLeft: 20,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  albumTitleContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  albumName: {
    fontSize: 20,
  },
})

const Album = (props) => {
  const { id } = useParams()
  const classes = useStyles()
  const { fetchAlbum, loading, album } = props
  const tracks = album.tracks.items
  useEffect(() => {
    fetchAlbum(id)
  }, [fetchAlbum, id])
  const imageUrl = album.images && album.images[1]?.url
  const artistName = album.artists && album.artists[0]?.name
  const artistId = album.artists && album.artists[0]?.id
  return (
    <div className={classes.root}>
      <ProgressWrapper loading={loading}>
        <div className={classes.albumHeader}>
          <img src={imageUrl} alt="cover" />
          <div className={classes.albumHeadeContent}>
            <div className={classes.albumTitleContainer}>
              <span className={classes.albumName}>{album.name}</span>
              <Link
                className={classes.artist}
                to={`/artists/${artistId}`}
              >
                <span>{artistName}</span>
              </Link>
              <span className={classes.releaseDate}>
                {new Date(
                  album.release_date,
                ).toLocaleDateString(
                  'en-US',
                  {
                    year: 'numeric',
                    month: 'long',
                  },
                )}
              </span>
            </div>
          </div>
        </div>
        <div className={classes.tracks}>
          <TracksGroup
            tracks={tracks}
            album={album}
          />
        </div>
      </ProgressWrapper>
    </div>
  )
}

export default Album
