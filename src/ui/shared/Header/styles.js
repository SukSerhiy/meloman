import { makeStyles } from '@material-ui/core/styles'
import { HEADER_HEIGHT } from '../constants'

const useStyles = makeStyles({
  root: {
    position: 'fixed',
    top: '0px',
    zIndex: 2,
    boxShadow: '0px 4px 22px white',
    backgroundColor: '#565a8a',
    height: HEADER_HEIGHT,
    width: '100%'
  },
  mainContent: {
    // padding: '0px 1.5%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 30,
    letterSpacing: 2,
    fontWeight: 'bold',
    color: '#fff',
    textDecoration: 'none',
  },
})

export default useStyles
