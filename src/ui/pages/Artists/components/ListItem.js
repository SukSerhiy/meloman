import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'
import GenreTags from '../../../shared/GenreTags'

const useStyles = makeStyles({
  root: {
    display: 'flex',
    marginBottom: 25,
    cursor: 'pointer',
    padding: '7px 15px',
    borderRadius: 8,
    '&:hover': {
      backgroundColor: '#fdf4d1',
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
})

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
