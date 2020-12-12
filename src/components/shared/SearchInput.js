import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { TextField } from '@material-ui/core'

const useStyles = makeStyles({
  searchInput: {
    width: '100%',
    backgroundColor: '#ffff',
    boxShadow: '0 0 14px #ffff',
    borderRadius: 7,
    borderColor: '#ffff',
  },
})

const SearchInput = (props) => {
  const classes = useStyles()
  const { onSearch } = props
  const [searchStr, setSearchStr] = useState('')
  return (
    <TextField
      label="Search"
      value={searchStr}
      variant="outlined"
      className={classes.searchInput}
      onChange={(e) => {
        setSearchStr(e.target.value)
      }}
      onBlur={() => {
        onSearch(searchStr)
      }}
    />
  )
}

export default SearchInput
