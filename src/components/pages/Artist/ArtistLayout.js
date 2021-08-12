import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useParams } from 'react-router-dom'
import LazyImage from '../../shared/LazyImage'

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '40px 5% 40px',
    minHeight: '100%',
    position: 'relative',
    backgroundColor: '#eedbc2',
    backgroundBlendMode: 'overlay',
    // backgroundImage: 'linear-gradient(to bottom, rgba(238, 219, 194, 0.7) 0, rgba(238, 219, 194, 0.7) 60%, transparent 100%), linear-gradient(to right, transparent 0, rgba(238, 219, 194, 0.1) 10%, rgba(238, 219, 194, 0.1) 90%, transparent 100%)',
  },
  contentHeader: {
    textAlign: 'center',
  },
  avatar: {
    margin: '0 auto',
    [theme.breakpoints.up('md')]: {
      borderRadius: '50%',
      width: 640,
      height: 640,
    },
  },
  title: {
    margin: 0,
    fontSize: '4em',
    padding: '10px 0px',
    position: 'relative',
    display: 'inline-block',
    [theme.breakpoints.up('md')]: {
      bottom: 70,
      fontSize: '8m',
      borderRadius: '50%',
      backgroundImage: 'radial-gradient(ellipse at center, #0000008a 0, transparent 100%)',
      padding: '10px 100px',
      letterSpacing: 6,
      color: '#f7ecec',
    },
  },
}))

const ArtistLayout = (props) => {
  const classes = useStyles()
  const {
    loading,
    artist,
    fetchArtist,
    children,
  } = props
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
