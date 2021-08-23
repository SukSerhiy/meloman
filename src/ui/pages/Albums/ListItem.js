import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'
import SpotifyLink from '../../shared/SpotifyLink'
import * as sharedPropTypes from '../../../propTypes'
import { getReleaseDate } from '../../../utils/date'

const useStyles = makeStyles({
  root: {
    display: 'flex',
    marginBottom: 25,
    alignItems: 'center',
    cursor: 'pointer',
    padding: '10px 15px',
    borderRadius: 8,
    '&:hover': {
      backgroundColor: '#d8d8d8',
    },
    textDecoration: 'none',
    color: '#483b03',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: '50%',
  },
  mainContent: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'space-between',
    padding: '10px 0px',
    marginLeft: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  bottomSection: {
    display: 'inline-flex',
    flexDirection: 'column',
    marginTop: 10,
  },
  linkWrapper: {
    display: 'flex',
    alignItems: 'center',
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
})

const AlbumListItem = ({ item }) => {
  const classes = useStyles()
  const {
    id,
    name = '',
    artists = [],
    release_date: releaseDate,
    release_date_precision: releaseDatePrecision,
    external_urls: externalUrls,
  } = item
  const avatar = (item.images.find((img) => img.width >= 100) || item.images[0])?.url
  return (
    <Link
      to={`/albums/${id}`}
      className={classes.root}
    >
      <div
        className={classes.avatar}
        style={{
          backgroundImage: `url(${avatar})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      />
      <div className={classes.mainContent}>
        <div className={classes.linkWrapper}>
          <span className={classes.title}>{name}</span>
          <SpotifyLink spotifyUrl={externalUrls?.spotify} />
        </div>
        <div className={classes.bottomSection}>
          {artists.map((artist) => {
            const spotifyUrl = artist?.external_urls?.spotify
            return (
              <div className={classes.linkWrapper} key={artist.id}>
                <Link
                  className={classes.artist}
                  to={`/artists/${artist.id}`}
                >
                  <span>{artist.name}</span>
                </Link>
                <SpotifyLink spotifyUrl={spotifyUrl} />
              </div>
            )
          })}
          <span className={classes.releaseDate}>
            {getReleaseDate(releaseDate, releaseDatePrecision)}
          </span>
        </div>
      </div>
    </Link>
  )
}

AlbumListItem.defaultProps = {
  item: {},
}

AlbumListItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string,
    release_date: PropTypes.string,
    release_date_precision: PropTypes.oneOf(['year', 'day']),
    external_urls: sharedPropTypes.externalUrl,
    artists: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        external_urls: sharedPropTypes.externalUrl,
      }),
    ),
  }),
}

export default AlbumListItem
