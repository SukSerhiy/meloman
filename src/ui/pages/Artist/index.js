import React, { useState, useEffect } from 'react'
import clsx from 'clsx'
import { useParams, useHistory } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward'
import { Button } from '@material-ui/core'
import TracksGroup from '../../shared/TracksGroup'
import GenreTags from '../../shared/GenreTags'
import AlbumItem from '../../AlbumItem'
import HoverableCard from '../../shared/HoverableCard'
import SectionTitle from './components/SectionTitle'
import ArtistLayout from './components/ArtistLayout'
import Slider from '../../shared/Slider'

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
    maxHeight: 500,
    transition: 'all 0.3s ease-in-out 0.2s',
  },
  topTrackExpanded: {
    maxHeight: '400vh',
  },
  showAllBtn: {
    textTransform: 'capitalize',
    fontSize: 16,
    fontWeight: 700,
    margin: '10px 0px 0px',
  },
  relatedArtist: {
    borderRadius: '50%',
  },
  sliderItemImg: {
    height: 445,
  },
  sliderItemWrapper: {
    padding: 20,
  },
})

const Artist = (props) => {
  const classes = useStyles()
  const { id } = useParams()
  const [tracksExpanded, setTracksExpanded] = useState(false)
  const {
    fetchTopTracks,
    fetchArtistAlbums,
    fetchRelatedArtists,
    artist,
    topTracks,
    albums,
    relatedArtists,
  } = props
  const history = useHistory()
  useEffect(() => {
    fetchTopTracks(id)
    fetchArtistAlbums(id)
    fetchRelatedArtists(id)
  }, [
    fetchTopTracks,
    fetchArtistAlbums,
    fetchRelatedArtists,
    id,
  ])

  return (
    <ArtistLayout {...props}>
      <section id="genresSection">
        <GenreTags items={artist.genres} />
      </section>
      <section
        id="topTracksSection"
        className={clsx(classes.topTracks, tracksExpanded ? classes.topTrackExpanded : '')}
      >
        <SectionTitle title="Top tracks" isShowAllBtn={false} />
        <TracksGroup
          tracks={topTracks}
          album={topTracks[0] && topTracks[0].album}
        />
      </section>
      <Button
        className={classes.showAllBtn}
        startIcon={tracksExpanded ? <ArrowUpwardIcon /> : <ArrowDownwardIcon />}
        onClick={() => setTracksExpanded(((prev) => !prev))}
      >
        {`Show ${tracksExpanded ? 'less' : 'all'} tracks`}
      </Button>
      <section>
        <SectionTitle
          title="Albums"
          onShowAllClick={() => history.push(`/artists/${id}/albums`)}
        />
        <Slider
          id="albums-slider"
          items={albums}
          renderItem={(album) => (
            <div className={classes.sliderItemWrapper}>
              <AlbumItem
                key={album.id}
                item={album}
                imgClassName={classes.sliderItemImg}
                to={`/albums/${album.id}`}
              />
            </div>
          )}
        />
      </section>

      <section>
        <SectionTitle
          title="Related Artists"
          onShowAllClick={() => history.push(`/artists/${id}/related`)}
        />
        <Slider
          id="related-artists-slider"
          items={relatedArtists}
          renderItem={(_artist) => (
            <div className={classes.sliderItemWrapper}>
              <HoverableCard
                key={_artist.id}
                imgClassName={classes.sliderItemImg}
                imageUrl={_artist.images[0]?.url}
                title={_artist.name}
                to={`/artists/${_artist.id}`}
              />
            </div>
          )}
        />
      </section>
    </ArtistLayout>
  )
}

export default Artist
