import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton,
} from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'

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
        onChange={(e) => {
          setSearchStr(e.target.value)
        }}
        onBlur={() => {
          onSearch(searchStr)
        }}
        onKeyDown={() => {

        }}
        endAdornment={(
          <InputAdornment position="end">
            <IconButton
              edge="end"
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
