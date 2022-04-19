import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  root: {
    position: 'sticky',
    top: '0px',
    zIndex: 2,
    boxShadow: '0px 4px 22px white',
  },
  mainContent: {
    padding: '15px 1.5%',
    backgroundColor: '#565a8a',
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
