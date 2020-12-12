import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import Pagination from '@material-ui/lab/Pagination'
import AlbumItem from '../../AlbumItem'
import PageWrapper from './PageWrapper'

const LIMIT = 50

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    padding: '0px 10%',
    minHeight: '100%',
    position: 'relative',
    backgroundSize: 'cover',
    backgroundBlendMode: 'overlay',
  },
  content: {
    zIndex: 1,
    flex: 1,
    backgroundImage: 'linear-gradient(90deg, transparent 0, #a9a9a9d6 1%, #a9a9a9d6 99%, transparent 100%)',
    padding: '0px 3%',
  },
  contentTitle: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    color: '#ffff',
    fontSize: 96,
    margin: 0,
    position: 'relative',
    bottom: 70,
    letterSpacing: 6,
    backgroundImage: 'radial-gradient(ellipse at center, #0000008a 0, transparent 70%, transparent 100%)',
  },
  topTracks: {
    overflow: 'hidden',
  },
  relatedArtist: {
    borderRadius: '50%',
  },
  grid: {
    display: 'flex',
    flexWrap: 'wrap',
    minHeight: '50%',
  },
  pagination: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
})

const Artist = (props) => {
  const classes = useStyles()
  const { id } = useParams()
  const {
    fetchArtistAlbums,
    albums: {
      items,
      previous,
      next,
      offset,
      total,
    },
  } = props
  useEffect(() => {
    fetchArtistAlbums(id, 0, LIMIT)
  }, [
    fetchArtistAlbums,
    id,
  ])

  const onPageChanged = (e) => {
    const newPage = e.target.innerText
    const newOffset = (newPage - 1) * LIMIT
    fetchArtistAlbums(id, newOffset, LIMIT)
  }

  return (
    <PageWrapper {...props}>
      <div className={classes.grid}>
        {items.map((album) => (
          <AlbumItem
            key={album.id}
            item={album}
            onClick={(_id) => window.open(`${window.location.origin}/albums/${_id}`)}
          />
        ))}
      </div>
      <section className={classes.pagination}>
        {(next || previous) && (
          <Pagination
            count={Math.ceil(total / LIMIT)}
            page={offset / LIMIT + 1}
            onClick={onPageChanged}
          />
        )}
      </section>
    </PageWrapper>
  )
}

export default Artist
