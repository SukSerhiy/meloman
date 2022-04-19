import React, { useState, useEffect, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import clsx from 'clsx'
import { useParams, useHistory } from 'react-router-dom'
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward'
import { Button } from '@material-ui/core'
import * as actions from '@redux/slices/artist'
import TracksGroup from 'ui/shared/TracksGroup'
import GenreTags from 'ui/shared/GenreTags'
import HoverableCard from 'ui/shared/HoverableCard'
import Slider from 'ui/shared/Slider'
import SectionTitle from './shared/SectionTitle'
import ArtistLayout from './shared/ArtistLayout'
import AlbumItem from './components/AlbumItem'
import useStyles from './styles'

const Artist = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const history = useHistory()
  const { id } = useParams()
  const [tracksExpanded, setTracksExpanded] = useState(false)
  const {
    loading,
    data: artist,
    topTracks,
    albums: { items: albums },
    relatedArtists,
  } = useSelector((store) => store.artist)

  const fetchArtist = useCallback((_id) => {
    dispatch(actions.fetchArtist(_id))
  }, [dispatch])

  const fetchTopTracks = useCallback((_id, market) => {
    dispatch(actions.fetchTopTracks({ id: _id, market }))
  }, [dispatch])

  const fetchArtistAlbums = useCallback((_id) => {
    dispatch(actions.fetchArtistAlbums({ artistId: _id }))
  }, [dispatch])

  const fetchRelatedArtists = useCallback((_id) => {
    dispatch(actions.fetchRelatedArtists(_id))
  }, [dispatch])

  useEffect(() => {
    fetchArtist(id)
    fetchTopTracks(id)
    fetchArtistAlbums(id)
    fetchRelatedArtists(id)
  }, [
    fetchArtist,
    fetchTopTracks,
    fetchArtistAlbums,
    fetchRelatedArtists,
    id,
  ])

  return (
    <ArtistLayout
      loading={loading}
      artist={artist}
      fetchArtist={fetchArtist}
    >
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
