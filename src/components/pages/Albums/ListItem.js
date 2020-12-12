import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'

const useStyles = makeStyles({
  root: {
    display: 'flex',
    marginBottom: 25,
    cursor: 'pointer',
    padding: '7px 15px',
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
  dataSection: {
    display: 'inline-flex',
    flexDirection: 'column',
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

const ArtistsListItem = (props) => {
  const classes = useStyles()
  const {
    id, avatar = '', name = '', artist = '', releaseDate = '',
  } = props
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
        <span className={classes.title}>{name}</span>
        <div>
          <div className={classes.dataSection}>
            <Link
              className={classes.artist}
              to={`/artists/${artist.id}`}
            >
              <span>{artist.name}</span>
            </Link>
            <span className={classes.releaseDate}>{releaseDate}</span>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default ArtistsListItem
