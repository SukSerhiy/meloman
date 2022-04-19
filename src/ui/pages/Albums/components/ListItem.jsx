import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import SpotifyLink from 'ui/shared/SpotifyLink'
import { getReleaseDate } from 'utils/date'
import useStyles from './styles';

const AlbumListItem = ({ item }) => {
  const classes = useStyles()
  const {
    id,
    name = '',
    artists = [],
    release_date: releaseDate,
    release_date_precision: releaseDatePrecision,
  } = item
  const avatar = (item.images.find((img) => img.width >= 100) || item.images[0])?.url
  return (
    <Link
      // @TODO: Dictionary for routes
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
        <span className={classes.title}>{name}</span>
        <div className={classes.bottomSection}>
          {artists.map((artist) => {
            const spotifyUrl = artist?.external_urls?.spotify
            return (
              <div className={classes.linkWrapper} key={artist.id}>
                <Link
                  className={classes.artist}
                  // @TODO: Dictionary for routes
                  to={`/artists/${artist.id}`}
                >
                  <span>{artist.name}</span>
                </Link>
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
    external_urls: PropTypes.shape({
      spotify: PropTypes.string,
    }),
    artists: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        external_urls: PropTypes.shape({
          spotify: PropTypes.string,
        }),
      }),
    ),
  }),
}

export default AlbumListItem
