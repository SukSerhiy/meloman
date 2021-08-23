import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import { IconButton, Slider } from '@material-ui/core'
import { Transition } from 'react-transition-group'
import PlayImg from '../../assets/icons/play-button.svg'
import PauseImg from '../../assets/icons/pause.svg'
import VolumeIcon from '../../assets/icons/volume.svg'
import MuteIcon from '../../assets/icons/mute.svg'
import { getReleaseDate } from '../../utils/date'
import { TRACK_STATUSES } from '../../constants'

const styles = {
  root: {
    display: 'flex',
    alignItems: 'center',
    margin: '20px 0px',
  },
  playIcon: {
    width: 65,
  },
  iconButtonWrapper: {
    borderRadius: '100%',
  },
  content: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: '4px 0px',
  },
  titleBlock: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 10,
  },
  titleText: {
    fontSize: 22,
  },
  albumCover: {
    width: 40,
    marginRight: 10,
  },
  albumBlock: {
    display: 'inline-flex',
    flexDirection: 'column',
  },
  albumName: {
    fontSize: 16,
    textDecoration: 'none',
    color: '#483b03',
    fontWeight: 'bold',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  releaseDate: {
    fontSize: 12,
  },
  sliders: {
    display: 'flex',
    alignItems: 'center',
  },
  volumeBlock: {
    display: 'flex',
    alignItems: 'center',
    paddingRight: 10,
  },
  volumeSlider: {
    width: 0,
  },
  volumeImg: {
    height: 20,
  },
}

const DURATION = 300
const DEFAULT_VOLUME = 0.5

const defaultStyle = {
  transition: `width ${DURATION}ms ease-in-out`,
  width: 0,
  opacity: 0,
}

const transitionStyles = {
  entering: { width: 200, opacity: 1 },
  entered: { width: 200, opacity: 1 },
  exiting: { width: 0, opacity: 1 },
  exited: { width: 0, opacity: 0 },
}

class Track extends Component {
  constructor(props) {
    super(props)
    this.audio = null
    this.state = {
      currentTime: 0,
      isVolumeShown: false,
      prevVolume: DEFAULT_VOLUME,
      volume: DEFAULT_VOLUME,
    }
  }

  componentDidMount() {
    const { track: { preview_url: previewUrl } } = this.props
    const { volume } = this.state
    this.audio = new Audio(previewUrl || undefined)
    this.audio.volume = volume
    this.audio.addEventListener('timeupdate', this.onTimeUpdate)
    this.audio.addEventListener('ended', this.onEnded)
  }

  componentDidUpdate(prevProps, prevState) {
    const { track, currentTrack } = this.props
    const prevTrack = prevProps.currentTrack

    // Тот же трек
    if (
      currentTrack.id === prevTrack.id
        && currentTrack.status !== prevTrack.status
        && currentTrack.id === track.id
    ) {
      // Возобновляем проигрывание с текущего места
      if (currentTrack.status === TRACK_STATUSES.PLAYING) {
        this.audio.play()
      }
      // Ставим на паузу
      if (currentTrack.status === TRACK_STATUSES.PAUSED) {
        this.audio.pause()
      }
    }
    // Если поменяли трек
    if (currentTrack.id !== prevTrack.id) {
      // Переключили с этого трека, остановить его
      if (prevTrack.id === track.id) {
        this.audio.currentTime = 0
        this.audio.pause()
      }
      // Включили этот трек
      if (currentTrack.id === track.id) {
        this.audio.currentTime = 0
        this.audio.play()
      }
    }

    const { volume } = this.state
    if (prevState.volume !== volume) {
      this.audio.volume = volume
    }
  }

  componentWillUnmount() {
    this.audio.removeEventListener('timeupdate', this.onTimeUpdate)
    this.audio.removeEventListener('ended', this.onEnded)
    this.audio.pause()
    this.audio = null
  }

  onEnded = () => {
    const { track, onEnd } = this.props
    this.audio.pause()
    this.setState({ currentTime: 0 })
    onEnd(track.id)
  }

  onTimeUpdate = () => {
    this.setState({ currentTime: this.audio.currentTime })
  }

  setTrackTime = (e, newValue) => {
    this.audio.currentTime = newValue
  }

  onVolumeChange = (e, newValue) => {
    this.setState({ volume: newValue })
  }

  changeMutted = () => {
    const { prevVolume, volume } = this.state
    if (volume === 0) {
      this.setState({ volume: prevVolume })
    } else {
      this.setState({
        prevVolume: volume,
        volume: 0,
      })
    }
  }

  showVolume = () => {
    this.setState({ isVolumeShown: true })
  }

  hideVolume = () => {
    this.setState({ isVolumeShown: false })
  }

  render() {
    const {
      classes,
      track,
      currentTrack,
      onPlay,
    } = this.props
    const { currentTime, volume, isVolumeShown } = this.state
    const muted = volume === 0
    // eslint-disable-next-line react/destructuring-assignment
    const album = track.album || this.props.album
    const disabled = !track.preview_url
    const albumCover = album?.images && album.images[album.images.length - 1]?.url

    return (
      <div className={classes.root}>
        <div
          className={classes.iconButtonWrapper}
          style={{
            cursor: disabled ? 'not-allowed' : 'unset',
          }}
        >
          <IconButton
            data-testid="play-pause-button"
            disabled={disabled}
            style={{
              opacity: disabled ? 0.5 : 1,
            }}
            onClick={() => {
              onPlay(track.id)
            }}
          >
            {track.id === currentTrack.id && currentTrack.status === TRACK_STATUSES.PLAYING
              ? (
                <img className={classes.playIcon} src={PauseImg} alt="pause" />
              ) : (
                <img className={classes.playIcon} src={PlayImg} alt="play" />
              )}
          </IconButton>
        </div>
        <div className={classes.content}>
          <div className={classes.titleBlock}>
            <img className={classes.albumCover} src={albumCover} alt="cover" />
            <span className={classes.titleText}>
              {track.name}
            </span>
          </div>
          {this.audio
            && track.id === currentTrack.id
            && [
              TRACK_STATUSES.PLAYING,
              TRACK_STATUSES.PAUSED,
            ].includes(currentTrack.status) && (
              <div className={classes.sliders}>
                <div style={{
                  width: '100%',
                  paddingRight: 20,
                }}
                >
                  <Slider
                    value={currentTime}
                    min={0}
                    step={0.1}
                    max={this.audio.duration}
                    onChange={this.setTrackTime}
                  />
                </div>
                <div
                  className={classes.volumeBlock}
                  onMouseEnter={this.showVolume}
                  onMouseLeave={this.hideVolume}
                >
                  <IconButton
                    onClick={this.changeMutted}
                  >
                    <img
                      src={muted ? MuteIcon : VolumeIcon}
                      alt="volume"
                      className={classes.volumeImg}
                    />
                  </IconButton>
                  <Transition in={isVolumeShown} timeout={DURATION}>
                    {(state) => (
                      <Slider
                        className={classes.volumeSlider}
                        style={{
                          ...defaultStyle,
                          ...transitionStyles[state],
                        }}
                        value={volume}
                        min={0}
                        step={0.1}
                        max={1}
                        onChange={this.onVolumeChange}
                      />
                    )}
                  </Transition>
                </div>
              </div>
          )}
          <div>
            <div className={classes.albumBlock}>
              <Link className={classes.albumName} to={`/albums/${album.id}`} target="__blank">
                {album.name}
              </Link>
              <span className={classes.releaseDate}>
                {album.release_date && getReleaseDate(
                  album.release_date, album.release_date_precision,
                )}
              </span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

Track.propTypes = {
  track: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    track: PropTypes.shape({
      preview_url: PropTypes.string,
    }),
  }).isRequired,
  currentTrack: PropTypes.shape({
    id: PropTypes.string,
    status: PropTypes.oneOf(
      Object.values(TRACK_STATUSES),
    ),
  }).isRequired,
  album: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(
      PropTypes.shape({
        url: PropTypes.string,
      }),
    ),
  }).isRequired,
  onPlay: PropTypes.func.isRequired,
  onEnd: PropTypes.func.isRequired,
}

export default withStyles(styles)(Track)
