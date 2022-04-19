import React, { useEffect, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import * as actions from '@redux/slices/artist'
import Pagination from 'ui/shared/Pagination'
import ArtistLayout from 'ui/pages/Artist/shared/ArtistLayout'
import AlbumItem from '../AlbumItem'

const LIMIT = 21

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    padding: '0px 10%',
    minHeight: '100%',
    position: 'relative',
    backgroundSize: 'cover',
    backgroundBlendMode: 'overlay',
  },
  contentTitle: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
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
  paginationSection: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  pagination: {
    '& button': {
      fontSize: 20,
      fontWeight: 500,
    },
  },
}))

const Artist = () => {
  const classes = useStyles()
  const { id } = useParams()
  const dispatch = useDispatch()
  const {
    loading,
    data: artist,
    albums: {
      items,
      previous,
      next,
      offset,
      total,
    },
  } = useSelector((store) => store.artist)

  const fetchArtist = useCallback((_id) => {
    dispatch(actions.fetchArtist(_id))
  }, [dispatch])

  const fetchArtistAlbums = useCallback((...rest) => {
    dispatch(actions.fetchArtistAlbums(...rest))
  }, [dispatch])

  useEffect(() => {
    fetchArtistAlbums({ artistId: id, limit: LIMIT })
  }, [fetchArtistAlbums, id])

  const onPageChanged = (e) => {
    const newPage = e.target.innerText
    const newOffset = (newPage - 1) * LIMIT
    fetchArtistAlbums({ artistId: id, offset: newOffset, limit: LIMIT })
  }

  return (
    <ArtistLayout
      imageToBackground
      loading={loading}
      artist={artist}
      fetchArtist={fetchArtist}
    >
      <Typography variant="h4">
        Releases
      </Typography>
      <div className={classes.grid}>
        {items.map((album) => (
          <AlbumItem
            key={album.id}
            item={album}
            to={`/albums/${album.id}`}
          />
        ))}
      </div>
      {(next || previous) && (
        <Pagination
          total={total}
          limit={LIMIT}
          offset={offset}
          onPageChanged={onPageChanged}
        />
      )}
    </ArtistLayout>
  )
}

export default Artist
