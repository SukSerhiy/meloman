import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  container: {
    position: 'relative',
  },
  navigation: {
    position: 'absolute',
    zIndex: 1000,
    height: 50,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    top: 'calc(50% - 50px)',
  },
  prevBtn: {
    left: 0,
  },
  nextBtn: {
    right: 0,
  },
}))

export default useStyles
