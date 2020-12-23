import React, { useEffect } from 'react'
import SearchPage from '../../shared/SearchPage'
import { getReleaseDate } from '../../../lib'
import ListItem from './ListItem'

const Albums = (props) => {
  const {
    fetchAlbums,
    loading,
    data: {
      items,
    },
    clearAlbums,
  } = props
  useEffect(() => () => clearAlbums(), [clearAlbums])
  return (
    <SearchPage
      title="Albums"
      onFetch={fetchAlbums}
      onClear={clearAlbums}
      items={items}
      loading={loading}
      renderListItem={(item) => {
        const avatar = item.images.reverse().find((img) => img.width >= 100)?.url
        const artist = item.artists && item.artists[0]
        return (
          <div key={item.id}>
            <ListItem
              id={item.id}
              avatar={avatar}
              name={item.name}
              artist={artist}
              releaseDate={getReleaseDate(item)}
            />
          </div>
        )
      }}
    />
  )
}

export default Albums
