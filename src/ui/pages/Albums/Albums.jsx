import React, { useEffect, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import * as actions from '@redux/slices/albums'
import SearchPage from 'ui/shared/SearchPage'
import Vinil from 'assets/videos/vinil.mp4'
import ListItem from './components/ListItem'

const Albums = () => {
  const dispatch = useDispatch()
  const albums = useSelector((store) => store.albums)
  const {
    loading,
    data: {
      items,
    },
  } = albums

  const fetchAlbums = useCallback((searchStr) => {
    dispatch(actions.fetchAlbums(searchStr))
  }, [dispatch])

  const clearAlbums = useCallback(() => {
    dispatch(actions.clearAlbums())
  }, [dispatch])

  useEffect(() => () => clearAlbums(), [clearAlbums])

  return (
    <SearchPage
      title="Releases"
      videoBgSrc={Vinil}
      onFetch={fetchAlbums}
      onClear={clearAlbums}
      items={items}
      loading={loading}
      renderListItem={(item) => (
        <ListItem
          key={item.id}
          item={item}
        />
      )}
    />
  )
}

export default Albums
