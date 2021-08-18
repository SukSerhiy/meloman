import React, { useEffect, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import { fetchLastReleases } from '../../actions/lastReleases'
import AlbumItem from '../AlbumItem'

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '0px 3%',
    [theme.breakpoints.up('lg')]: {
      padding: '0px 14%',
    },
  },
  grid: {
    display: 'grid',
    gridGap: '50px 10%',
    justifyItems: 'center',
    [theme.breakpoints.up('sm')]: {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
    [theme.breakpoints.up('lg')]: {
      gridTemplateColumns: 'repeat(3, 1fr)',
    },
  },
}))

const LastReleases = () => {
  const classes = useStyles()
  const lastReleases = useSelector((store) => store.lastReleases)
  const {
    data:
      {
        items = [],
      },
  } = lastReleases
  const dispatch = useDispatch()
  const fetchItems = useCallback(
    () => dispatch(fetchLastReleases()),
    [dispatch],
  )
  // const canLoadMore = Boolean(next)
  // const nextOffset = offset + limit
  // const loadMore = () => {
  //   if (canLoadMore) {
  //     fetchLastReleases(nextOffset, limit)
  //   }
  // }
  useEffect(() => {
    if (items.length === 0) {
      fetchItems()
    }
  }, [fetchItems, items.length])
  // const history = useHistory()
  // const loading = loadingProp && !nextOffset

  // const itemsCount = (
  //   <div className={classes.countBlock}>
  //     <span className={classes.count}>
  //       {nextOffset || ''}
  //     </span>
  //     items out of
  //     <span className={classes.count}>
  //       {total}
  //     </span>
  //   </div>
  // );
  return (
    <div className={classes.root}>
      <h2>Last releases</h2>
      <div className={classes.grid}>
        {items.map((item) => (
          <AlbumItem
            key={item.id}
            item={item}
            to={`/albums/${item.id}`}
          />
        ))}
      </div>
    </div>
  )
}

export default LastReleases
