import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton,
} from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import { useDebounce } from '../../../hooks'

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  searchInput: {
    width: '100%',
    backgroundColor: '#ffff',
    boxShadow: '0 0 14px #ffff',
    borderRadius: 7,
    borderColor: '#ffff',
  },
}))

const SearchInput = (props) => {
  const classes = useStyles()
  const { onSearch } = props
  const [searchStr, setSearchStr] = useState('')
  const debouncedValue = useDebounce(searchStr)
  const onInputChange = (e) => {
    setSearchStr(e.target.value)
  }
  useEffect(() => {
    if (debouncedValue) {
      onSearch(debouncedValue)
    }
  }, [debouncedValue])
  return (
    <FormControl fullWidth className={classes.margin} variant="outlined">
      <InputLabel htmlFor="search-input">Search</InputLabel>
      <OutlinedInput
        id="search-input"
        label="Search"
        value={searchStr}
        variant="outlined"
        className={classes.searchInput}
        labelWidth={60}
        onChange={onInputChange}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            onSearch(debouncedValue)
          }
        }}
        endAdornment={(
          <InputAdornment position="end">
            <IconButton
              edge="end"
              onClick={() => onSearch(debouncedValue)}
            >
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        )}
      />
    </FormControl>
  )
}

export default SearchInput
