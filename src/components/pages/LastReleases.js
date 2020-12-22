import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import AlbumItem from '../AlbumItem'
import ProgressWrapper from '../shared/ProgressWrapper'
import LoadMore from '../shared/LoadMore'

const styles = {
  root: {
    padding: '1px 18% 30px',
    backgroundColor: '#e5e5e5',
  },
  rootLoading: {
    height: '100%',
  },
  grid: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  countBlock: {
    display: 'flex',
    justifyContent: 'center',
  },
  count: {
    fontWeight: 'bold',
    margin: '0px 10px',
  },
}

const LastReleases = (props) => {
  const {
    classes,
    fetchLastReleases,
    loading: loadingProp,
    data: {
      items,
      offset,
      limit,
      total,
      next,
    },
  } = props
  const canLoadMore = Boolean(next)
  const nextOffset = offset + limit
  const loadMore = () => {
    if (canLoadMore) {
      fetchLastReleases(nextOffset, limit)
    }
  }
  useEffect(() => {
    if (items.length === 0) {
      fetchLastReleases()
    }
  }, [fetchLastReleases, items.length])
  const history = useHistory()
  const loading = loadingProp && !nextOffset
  return (
    <div className={clsx(classes.root, loading && classes.rootLoading)}>
      <ProgressWrapper
        loading={loading}
      >
        <h2>Last releases</h2>
        <div className={classes.grid}>
          {items.map((item) => (
            <AlbumItem
              key={item.id}
              item={item}
              onClick={(id) => history.push(`/albums/${id}`)}
            />
          ))}
        </div>
        <div className={classes.countBlock}>
          <span className={classes.count}>
            {nextOffset || ''}
          </span>
          items out of
          <span className={classes.count}>
            {total}
          </span>
        </div>
        {canLoadMore && (
          <LoadMore
            loading={loading}
            onClick={loadMore}
          />
        )}
      </ProgressWrapper>
    </div>
  )
}

export default withStyles(styles)(LastReleases)
