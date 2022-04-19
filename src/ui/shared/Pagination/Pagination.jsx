import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import MuiPagination from '@material-ui/lab/Pagination'

const useStyles = makeStyles(() => ({
  paginationSection: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  pagination: {
    '& button': {
      fontSize: 20,
      fontWeight: 500,
    },
  },
}))

const Pagination = ({
  total,
  limit,
  onPageChanged,
}) => {
  const classes = useStyles()

  return (
    <section className={classes.paginationSection}>
      <MuiPagination
        size="large"
        classes={{
          root: classes.pagination,
        }}
        count={Math.ceil(total / limit)}
        // page={offset / limit + 1}
        onClick={onPageChanged}
      />
    </section>
  )
}

Pagination.defaultProps = {
  onPageChanged: () => {},
}

Pagination.propTypes = {
  total: PropTypes.number.isRequired,
  limit: PropTypes.number.isRequired,
  onPageChanged: PropTypes.func,
}

export default Pagination
