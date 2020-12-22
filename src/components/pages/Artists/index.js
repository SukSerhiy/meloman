import React, { useEffect } from 'react'
import { withStyles } from '@material-ui/core/styles'
import ProgressWrapper from '../../shared/ProgressWrapper'
import SearchInput from '../../shared/SearchInput'
import ListItem from './ListItem'

const styles = {
  root: {
    padding: '1px 18% 30px',
    backgroundColor: '#e5e5e5',
    minHeight: '100%',
  },
  artistsList: {
    marginTop: 20,
  },
}

const Artists = (props) => {
  const {
    classes,
    fetchArtists,
    loading,
    data: {
      items,
    },
    clearArtists,
  } = props
  useEffect(() => () => clearArtists(), [clearArtists])
  return (
    <div className={classes.root}>
      <h2>Artists</h2>
      <SearchInput
        onSearch={fetchArtists}
      />
      <ProgressWrapper loading={loading}>
        <div className={classes.artistsList}>
          {items.map((item) => {
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
          })}
        </div>
      </ProgressWrapper>
    </div>
  )
}

export default withStyles(styles)(Artists)
