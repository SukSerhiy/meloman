import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  root: {
    display: 'flex',
    marginBottom: 25,
    alignItems: 'center',
    cursor: 'pointer',
    padding: '10px 15px',
    borderRadius: 8,
    '&:hover': {
      backgroundColor: '#d8d8d8',
    },
    textDecoration: 'none',
    color: '#483b03',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: '50%',
  },
  mainContent: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'space-between',
    padding: '10px 0px',
    marginLeft: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  bottomSection: {
    display: 'inline-flex',
    flexDirection: 'column',
    marginTop: 10,
  },
  linkWrapper: {
    display: 'flex',
    alignItems: 'center',
  },
  artist: {
    fontWeight: 'bold',
    color: '#483b03',
    textDecoration: 'none',
    marginBottom: 4,
    '&:hover': {
      textDecoration: 'underline',
    },
  },
})

export default useStyles
