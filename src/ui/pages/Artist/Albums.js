import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import Pagination from '@material-ui/lab/Pagination'
import AlbumItem from '../../AlbumItem'
import PageWrapper from './components/ArtistLayout'

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
    <PageWrapper imageToBackground {...props}>
      <div className={classes.grid}>
        {items.map((album) => (
          <AlbumItem
            key={album.id}
            item={album}
            to={`/albums/${album.id}`}
          />
        ))}
      </div>
      <section className={classes.paginationSection}>
        {(next || previous) && (
          <Pagination
            size="large"
            classes={{
              root: classes.pagination,
            }}
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
