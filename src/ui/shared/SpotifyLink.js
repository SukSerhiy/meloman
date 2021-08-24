import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import SpotifyLogo from '../../assets/icons/spotify.svg'

const useStyles = makeStyles(() => ({
  spotifyLogo: {
    width: 20,
    marginLeft: 20,
    cursor: 'pointer',
  },
}))

const SpotifyLink = ({ spotifyUrl }) => {
  const classes = useStyles()
  return (
    <img
      src={SpotifyLogo}
      className={classes.spotifyLogo}
      onClick={() => window.open(spotifyUrl, '_blank')}
      alt="spotify"
    />
  )
}

export default SpotifyLink
