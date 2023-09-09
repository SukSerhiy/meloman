import { makeStyles } from '@material-ui/core/styles'
import { HEADER_HEIGHT } from '../constants'

const useStyles = makeStyles({
  root: {
    position: 'fixed',
    top: '0px',
    zIndex: 2,
    background: 'var(--clr-bg-card)',
    height: HEADER_HEIGHT,
    width: '100%'
  },
  mainContent: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 30,
    letterSpacing: 2,
    fontWeight: 'bold',
    color: 'var(--clr-text-light)',
    textDecoration: 'none',
  },
})

export default useStyles
