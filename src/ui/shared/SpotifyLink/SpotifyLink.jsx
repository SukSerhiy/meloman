import React from 'react'
import { Tooltip } from '@material-ui/core'
import SpotifyLogo from 'assets/icons/spotify.svg'
import useStyles from './styles'

const SpotifyLink = ({ spotifyUrl }) => {
  const classes = useStyles()
  return (
    <Tooltip title="Open on Spotify" arrow placement="right">
      <img
        src={SpotifyLogo}
        className={classes.spotifyLogo}
        onClick={() => window.open(spotifyUrl, '_blank')}
        alt="spotify"
      />
    </Tooltip>
  )
}

export default SpotifyLink
