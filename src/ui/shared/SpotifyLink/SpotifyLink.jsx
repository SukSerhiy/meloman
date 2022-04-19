import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import SpotifyLogo from 'assets/icons/spotify.svg'
import useStyles from './styles'

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
