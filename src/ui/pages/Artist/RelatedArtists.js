import React, { useEffect, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import HoverableCard from '../../shared/HoverableCard'
import * as actions from '../../../redux/slices/artist'
import ArtistLayout from './components/ArtistLayout'

const useStyles = makeStyles((theme) => ({
  grid: {
    display: 'grid',
    gridGap: '50px 10%',
    justifyItems: 'center',
    [theme.breakpoints.up('sm')]: {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
    [theme.breakpoints.up('lg')]: {
      gridTemplateColumns: 'repeat(3, 1fr)',
    },
  },
}))

const Artist = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const { id } = useParams()
  const {
    loading,
    data: artist,
    relatedArtists,
  } = useSelector((store) => store.artist)

  const fetchArtist = useCallback((_id) => {
    dispatch(actions.fetchArtist(_id))
  }, [dispatch])

  const fetchRelatedArtists = useCallback((_id) => {
    dispatch(actions.fetchRelatedArtists(_id))
  }, [dispatch])

  useEffect(() => {
    fetchRelatedArtists(id)
  }, [fetchRelatedArtists, id])

  return (
    <ArtistLayout
      imageToBackground
      loading={loading}
      artist={artist}
      fetchArtist={fetchArtist}
    >
      <div className={classes.grid}>
        {relatedArtists.map((_artist) => (
          <HoverableCard
            key={_artist.id}
            imageUrl={_artist.images[0]?.url}
            title={_artist.name}
            to={`/artists/${_artist.id}`}
          />
        ))}
      </div>
    </ArtistLayout>
  )
}

export default Artist
