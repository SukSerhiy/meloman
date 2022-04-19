import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    width: '100%',
    height: '100%',
    overflow: 'hidden',
  },
  loading: {
    height: '100%',
    width: '100%',
    position: 'absolute',
    top: 0,
    right: '-90%',
    background: 'linear-gradient(to left, transparent 0%, #26b3ff17 50%, transparent 100%)',
    animation: `$load 1s ${theme.transitions.easing.easeInOut} infinite`,
  },
  img: {
    display: 'none',
    height: '100%',
    width: '100%',
    objectFit: 'cover',
  },
  imgLoaded: {
    display: 'block',
  },
  '@keyframes load': {
    '0%': {
      right: -'100%',
    },
    '100%': {
      right: '100%',
    },
  },
}))

export default useStyles
