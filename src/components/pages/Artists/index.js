import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import SearchPage from '../../shared/SearchPage'
import ListItem from './ListItem'
import Band from '../../../assets/videos/band-playing.mp4'

const Artists = (props) => {
  const {
    fetchArtists,
    loading,
    data: {
      items,
    },
    clearArtists,
  } = props
  const history = useHistory()
  useEffect(() => {
    if (history.action === 'PUSH') {
      clearArtists()
    }
  }, [clearArtists])
  return (
    <SearchPage
      title="Artists"
      videoBgSrc={Band}
      loading={loading}
      onFetch={fetchArtists}
      onClear={clearArtists}
      items={items}
      renderListItem={(item) => {
        const avatar = item.images.reverse().find((img) => img.width >= 100)?.url
        return (
          <div key={item.id}>
            <ListItem
              id={item.id}
              avatar={avatar}
              name={item.name}
              genres={item.genres}
            />
          </div>
        )
      }}
    />
  )
}

export default Artists
