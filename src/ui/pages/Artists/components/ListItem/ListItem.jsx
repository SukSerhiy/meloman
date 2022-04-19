import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import GenreTags from 'ui/shared/GenreTags'
import useStyles from './styles'

const ListItem = ({ item }) => {
  const classes = useStyles()
  const {
    id, name = '', genres = [],
  } = item
  const avatar = (item.images.find((img) => img.width >= 100) || item.images[0])?.url
  return (
    <Link
      to={`/artists/${id}`}
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
        <GenreTags items={genres} />
      </div>
    </Link>
  )
}

ListItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    images: PropTypes.arrayOf(PropTypes.shape({})),
    genres: PropTypes.arrayOf(PropTypes.shape()),
  }).isRequired,
}

export default ListItem
