import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import * as actions from '@redux/slices/artist';
import HoverableCard from 'ui/shared/HoverableCard';
import ArtistLayout from 'ui/shared/ArtistLayout';
import useStyles from './styles';

const Artist = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { id } = useParams();
  const {
    loading,
    data: artist,
    relatedArtists,
  } = useSelector((store) => store.artist);

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
