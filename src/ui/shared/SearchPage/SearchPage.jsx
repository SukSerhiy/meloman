import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import { useHistory } from 'react-router-dom'
import SearchInput from './components/SearchInput'
import useStyles from './styles'

const SearchPage = ({
  onFetch,
  loading,
  title,
  items,
  onClear,
  videoBgSrc,
  renderListItem,
}) => {
  const classes = useStyles()
  const history = useHistory()
  useEffect(() => {
    if (history.action === 'PUSH') {
      onClear()
    }
  }, [onClear])
  return (
    <div className={classes.root}>
      {videoBgSrc && (
        <div className={classes.background}>
          <video className={classes.bgVideo} src={videoBgSrc} autoPlay loop muted />
        </div>
      )}
      <h2 className={classes.h2}>{title}</h2>
      <SearchInput
        onSearch={onFetch}
      />
      {/* <ProgressWrapper loading={loading}> */}
        <div className={classes.list}>
          {items.map((item) => (
            <div className={classes.listItem} key={items.id}>
              {renderListItem(item)}
            </div>
          ))}
        </div>
      {/* </ProgressWrapper> */}
    </div>
  )
}

SearchPage.defaultProps = {
  onFetch: () => {},
  loading: false,
  title: '',
  items: [],
  onClear: () => {},
  videoBgSrc: '',
  renderListItem: () => {},
}

SearchPage.propTypes = {
  onFetch: PropTypes.func,
  loading: PropTypes.bool,
  title: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
  })),
  onClear: PropTypes.func,
  videoBgSrc: PropTypes.string,
  renderListItem: PropTypes.func,
}

export default SearchPage
