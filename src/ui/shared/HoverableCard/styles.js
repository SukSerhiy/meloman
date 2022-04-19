import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  root: {
    padding: '20px 30px',
    position: 'relative',
    borderRadius: 10,
    backgroundColor: '#5c68a9',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textDecoration: 'none',
    transition: 'all 0.1s ease 0s',
    '&._hover': {
      transform: 'scale(1.009)',
    },
  },
  avatar: {
    width: '100%',
    borderRadius: 10,
    objectFit: 'cover',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffff',
    textAlign: 'center',
    margin: '10px 0px 0px 0px',
  },
  subtitle: {
    fontSize: 16,
    color: 'lightgrey',
    textAlign: 'center',
    margin: '10px 0px 0px 0px',
  },
})

export default useStyles;
