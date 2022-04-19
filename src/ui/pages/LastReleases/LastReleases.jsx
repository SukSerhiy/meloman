import React, { useEffect, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Typography } from '@material-ui/core'
import AlbumItem from 'ui/shared/AlbumItem'
import Paginaton from 'ui/shared/Pagination'
import * as actions from '@redux/slices/lastReleases'
import useStyles from './styles'

const LastReleases = () => {
  const classes = useStyles()
  const lastReleases = useSelector((store) => store.lastReleases)
  const {
    data:
      {
        items = [],
        limit,
        total,
      },
  } = lastReleases
  const dispatch = useDispatch()
  const fetchLastReleases = useCallback(
    (...rest) => dispatch(actions.fetchLastReleases(...rest)),
    [dispatch],
  )

  useEffect(() => {
    if (items.length === 0) {
      fetchLastReleases()
    }
  }, [fetchLastReleases, items.length])

  const onPageChanged = (e) => {
    const newPage = e.target.innerText
    const newOffset = (newPage - 1) * 21
    fetchLastReleases({ offset: newOffset, limit: 21 })
  }

  return (
    <div className={classes.root}>
      <Typography variant="h4">
        Last releases
      </Typography>
      <div className={classes.grid}>
        {items.map((item) => (
          <AlbumItem
            key={item.id}
            item={item}
            to={`/albums/${item.id}`}
          />
        ))}
      </div>
      <Paginaton
        total={total}
        limit={limit}
        onPageChanged={onPageChanged}
      />
    </div>
  )
}

export default LastReleases
