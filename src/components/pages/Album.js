import React, { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton';
import ProgressWrapper from '../shared/ProgressWrapper'
import TracksGroup from '../shared/TracksGroup'
import SpotifyLogo from '../../assets/icons/spotify.svg'
import ThreeDotsIcon from '../../assets/icons/three-dots-vertical.svg';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '0px 3%',
    [theme.breakpoints.up('lg')]: {
      padding: '0px 10%',
    },
  },
  container: {
    margin: '0 auto',
    display: 'flex',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
    },
  },
  albumBody: {
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.up('xs')]: {
      marginLeft: '1%',
    },
    [theme.breakpoints.down('xs')]: {
      alignItems: 'center',
    },
  },
  coverImg: {
    [theme.breakpoints.down('xs')]: {
      display: 'block',
      margin: '0 auto',
    },
  },
  albumName: {
    fontSize: 23,
    fontWeight: 'bold',
  },
  artistLink: {
    fontSize: 16,
    fontWeight: 'bold',
    textDecoration: 'none',
    color: '#483b03',
    lineHeight: 2,
    transition: 'color 0.3s ease 0s',
    '&:hover': {
      color: '#b18a42',
    },
  },
  spotifyLogo: {
    width: 20,
    marginLeft: 20,
    cursor: 'pointer'
  },
  menuButton: {
    position: 'absolute',
    right: 0,
    marginRight: 20,
  },
  threeDotsIcon: {
    height: 40,
  },
}))

const Album = ({ fetchAlbum, loading, album }) => {
  const { id } = useParams()
  const classes = useStyles()
  const tracks = album.tracks.items
  console.log('loading', loading)
  useEffect(() => {
    fetchAlbum(id)
  }, [fetchAlbum, id])
  useEffect(() => {
    if (!loading) {

    }
  }, [loading])
  const imageUrl = album.images && album.images[1]?.url
  if (loading) {
    return null;
  }
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <img className={classes.coverImg} src={imageUrl} alt="cover" />
        <IconButton className={classes.menuButton}>
          <img className={classes.threeDotsIcon} src={ThreeDotsIcon} alt="menu-icon" />
        </IconButton>
        <div className={classes.albumBody}>
          <div style={{ display: 'flex' }}>
            <span className={classes.albumName}>{album.name}</span>
            <img
              src={SpotifyLogo}
              className={classes.spotifyLogo}
              onClick={() => window.open(album.external_urls.spotify, '_blank')}
              alt="spotify"
            />
          </div>
          {album.artists?.map((artist) => (
            <div key={artist.id}>
              <Link
                className={classes.artistLink}
                to={`/artists/${artist.id}`}
              >
                <span>{artist.name}</span>
              </Link>
              <img
                src={SpotifyLogo}
                className={classes.spotifyLogo}
                onClick={() => window.open(artist.external_urls.spotify, '_blank')}
                alt="spotify"
              />
            </div>
          ))}
        </div>
      </div>
      <TracksGroup
        tracks={tracks}
        album={album}
      />
    </div>
    // <div className={classes.root}>
    //   <div className={classes.albumHeader}>
    //     <img src={imageUrl} alt="cover" />
    //     <div className={classes.albumHeadeContent}>
    //       <div className={classes.albumTitleContainer}>
    //         <span className={classes.albumName}>{album.name}</span>
    //         <Link
    //           className={classes.artist}
    //           to={`/artists/${artistId}`}
    //         >
    //           <span>{artistName}</span>
    //         </Link>
    //         <span className={classes.releaseDate}>
    //           {new Date(
    //             album.release_date,
    //           ).toLocaleDateString(
    //             'en-US',
    //             {
    //               year: 'numeric',
    //               month: 'long',
    //             },
    //           )}
    //         </span>
    //       </div>
    //   </div>
    //   {/* <div className={classes.tracks}>
    //     <TracksGroup
    //       tracks={tracks}
    //       album={album}
    //     />
    //   </div> */}
    // </div>
  )
}

export default Album
