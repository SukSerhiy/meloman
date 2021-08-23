import React, { useEffect, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import SearchPage from '../../shared/SearchPage'
import {
  fetchAlbums as fetchAlbumsAction,
  clearAlbums as clearAlbumsAction,
} from './albumsSlice'
import ListItem from './ListItem'
import Vinil from '../../../assets/videos/vinil.mp4'

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
    dispatch(fetchAlbumsAction(searchStr))
  }, [dispatch])

  const clearAlbums = useCallback(() => {
    dispatch(clearAlbumsAction())
  }, [dispatch])

  useEffect(() => () => clearAlbums(), [clearAlbums])

  return (
    <SearchPage
      title="Albums"
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
