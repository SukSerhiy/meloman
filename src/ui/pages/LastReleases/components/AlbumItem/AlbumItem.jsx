import React from 'react'
import HoverableCard from 'ui/shared/HoverableCard'

const AlbumItem = (props) => {
  const { item, onClick = () => {}, ...rest } = props
  return (
    <HoverableCard
      id={item.id}
      imageUrl={item.images[1].url}
      title={item.name}
      subtitle={item.artists[0].name}
      onClick={onClick}
      {...rest}
    />
  )
}

export default AlbumItem
