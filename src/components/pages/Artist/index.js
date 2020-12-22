import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import { Button } from '@material-ui/core'

import Slider from 'react-slick'
import TracksGroup from '../../shared/TracksGroup'
import GenreTags from '../../shared/GenreTags'
import AlbumItem from '../../AlbumItem'
import HoverableGridItem from '../../shared/HoverableGridItem'
import SectionTitle from './SectionTitle'
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
})

const sliderProps = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
}

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
  console.log('relatedArtists', relatedArtists)
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
    <PageWrapper {...props}>
      <section id="genresSection">
        <GenreTags items={artist.genres} />
      </section>
      <section
        id="topTracksSection"
        className={classes.topTracks}
        style={{
          maxHeight: tracksExpanded ? 'unset' : 500,
        }}
      >
        <SectionTitle title="Top tracks" />
        <TracksGroup
          tracks={topTracks}
          album={topTracks[0] && topTracks[0].album}
        />
      </section>
      <Button onClick={() => setTracksExpanded(!tracksExpanded)}>
        Show all tracks
      </Button>
      <section id="albumsSection">
        <SectionTitle
          title="Albums"
          onShowAllClick={() => window.open(`${window.location.origin}/artists/${id}/albums`)}
        />
        <Slider {...sliderProps}>
          {albums.map((album) => (
            <div key={album.id}>
              <Link
                target="__blank"
                to={`/albums/${album.id}`}
              >
                <AlbumItem
                  key={album.id}
                  item={album}
                />
              </Link>
            </div>
          ))}
        </Slider>
      </section>
      <section id="relatedArtists">
        <SectionTitle title="Related Artists" />
        <Slider {...sliderProps}>
          {relatedArtists.map((_artist) => (
            <div key={_artist.id}>
              <Link
                target="__blank"
                to={`/artists/${_artist.id}`}
              >
                <HoverableGridItem
                  classes={{
                    root: classes.relatedArtist,
                    cover: classes.relatedArtist,
                  }}
                  key={_artist.id}
                  imageUrl={_artist.images[0]?.url}
                  title={_artist.name}
                />
              </Link>
            </div>
          ))}
        </Slider>
      </section>
    </PageWrapper>
  )
}

export default Artist
