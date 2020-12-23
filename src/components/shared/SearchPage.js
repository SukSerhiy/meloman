import React, { useEffect } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { useHistory } from 'react-router-dom'
import ProgressWrapper from './ProgressWrapper'
import SearchInput from './SearchInput'

const styles = {
  root: {
    padding: '1px 18% 30px',
    backgroundColor: '#e5e5e5',
    minHeight: '100%',
  },
  list: {
    marginTop: 20,
  },
}

const SearchPage = (props) => {
  const {
    classes,
    onFetch,
    loading,
    title,
    items,
    onClear = () => {},
    renderListItem,
  } = props
  const history = useHistory()
  useEffect(() => {
    if (history.action === 'PUSH') {
      onClear()
    }
  }, [onClear])
  return (
    <div className={classes.root}>
      <h2>{title}</h2>
      <SearchInput
        onSearch={onFetch}
      />
      <ProgressWrapper loading={loading}>
        <div className={classes.list}>
          {items.map((item) => renderListItem(item))}
        </div>
      </ProgressWrapper>
    </div>
  )
}

export default withStyles(styles)(SearchPage)
