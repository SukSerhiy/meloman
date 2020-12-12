import React, { useEffect } from 'react'
import { withStyles } from '@material-ui/core/styles'
import ProgressWrapper from '../../shared/ProgressWrapper'
import SearchInput from '../../shared/SearchInput'
import { getReleaseDate } from '../../../lib'
import ListItem from './ListItem'

const styles = {
  root: {
    padding: '1px 18% 30px',
    backgroundColor: '#e5e5e5',
    minHeight: 'calc(100% - 140px)',
  },
  artistsList: {
    marginTop: 20,
  },
}

const Albums = (props) => {
  const {
    classes,
    fetchAlbums,
    loading,
    data: {
      items,
    },
    clearAlbums,
  } = props
  useEffect(() => () => clearAlbums(), [clearAlbums])
  return (
    <div className={classes.root}>
      <h2>Albums</h2>
      <SearchInput
        onSearch={fetchAlbums}
      />
      <ProgressWrapper loading={loading}>
        <div className={classes.artistsList}>
          {items.map((item) => {
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
          })}
        </div>
      </ProgressWrapper>
    </div>
  )
}

export default withStyles(styles)(Albums)
