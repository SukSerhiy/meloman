import React, { useEffect, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import * as actions from '../../../redux/slices/artists'
import SearchPage from '../../shared/SearchPage'
import ListItem from './components/ListItem'
import BandVideo from '../../../assets/videos/band-playing.mp4'

const Artists = () => {
  const dispatch = useDispatch()
  const artists = useSelector((store) => store.artists)
  const {
    loading,
    data: {
      items,
    },
  } = artists

  const fetchArtists = useCallback((searchStr) => {
    dispatch(actions.fetchArtists(searchStr))
  }, [dispatch])

  const clearArtists = useCallback(() => {
    dispatch(actions.clearArtists())
  }, [dispatch])

  useEffect(() => () => clearArtists(), [clearArtists])
  return (
    <SearchPage
      title="Artists"
      videoBgSrc={BandVideo}
      loading={loading}
      onFetch={fetchArtists}
      onClear={clearArtists}
      items={items}
      renderListItem={(item) => (
        <ListItem
          key={item.id}
          item={item}
        />
      )}
    />
  )
}

export default Artists
