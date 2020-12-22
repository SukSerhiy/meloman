import React, { useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import HoverableGridItem from '../../shared/HoverableGridItem'
import PageWrapper from './PageWrapper'

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
})

const Artist = (props) => {
  const classes = useStyles()
  const { id } = useParams()
  const {
    fetchRelatedArtists,
    relatedArtists,
  } = props
  const history = useHistory()
  useEffect(() => {
    fetchRelatedArtists(id)
  }, [
    fetchRelatedArtists,
    id,
  ])

  return (
    <PageWrapper imageToBackground {...props}>
      <div className={classes.grid}>
        {relatedArtists.map((_artist) => (
          <HoverableGridItem
            classes={{
              root: classes.relatedArtist,
              cover: classes.relatedArtist,
            }}
            key={_artist.id}
            imageUrl={_artist.images[0]?.url}
            title={_artist.name}
            onClick={() => history.push(`/artists/${_artist.id}`)}
          />
        ))}
      </div>
    </PageWrapper>
  )
}

export default Artist
