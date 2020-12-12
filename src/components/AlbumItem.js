import React from 'react'
import HoverableGridItem from './shared/HoverableGridItem'

const AlbumItem = (props) => {
  const { item, onClick = () => {} } = props
  return (
    <HoverableGridItem
      id={item.id}
      imageUrl={item.images[1].url}
      title={item.name}
      subtitle={item.artists[0].name}
      onClick={onClick}
    />
  )
}

export default AlbumItem
