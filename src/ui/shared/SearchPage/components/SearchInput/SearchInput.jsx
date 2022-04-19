import React, { useState, useEffect } from 'react'
import {
  FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton,
} from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import { useDebounce } from '../../../../../hooks'
import useStyles from './styles'

const SearchInput = ({ onSearch }) => {
  const classes = useStyles()
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
