import React from 'react'
import HoverableCard from 'ui/shared/HoverableCard'
import { getReleaseDate } from 'utils/date'

const AlbumItem = (props) => {
  const { item, onClick = () => {}, ...rest } = props
  const {
    release_date: releaseDate
  } = item;
  const realiseDateFormatted = releaseDate && getReleaseDate(releaseDate, 'year')
  return (
    <HoverableCard
      id={item.id}
      imageUrl={item.images[1].url}
      title={item.name}
      subtitle={realiseDateFormatted}
      onClick={onClick}
      {...rest}
    />
  )
}

export default AlbumItem
