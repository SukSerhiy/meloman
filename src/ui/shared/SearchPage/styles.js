import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
    boxSizing: 'border-box',
    padding: '20px 3%',
    [theme.breakpoints.up('lg')]: {
      padding: '100px 10% 30px 10%',
    },
    margin: 'auto 0',
    position: 'relative',
  },
  background: {
    height: '100%',
    width: '100%',
    position: 'fixed',
    top: 0,
    left: 0,
  },
  bgVideo: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    background: '#232a34',
    opacity: 0.2,
  },
  title: {
    textAlign: 'center',
  },
  list: {
    padding: '10px 0px 10px 8px',
  },
  listItem: {
    backgroundColor: '#fff',
    borderRadius: 10,
    zIndex: 1,
    position: 'relative',
  },
}))

export default useStyles
