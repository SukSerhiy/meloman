import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  root: {
    display: 'flex',
    marginBottom: 25,
    cursor: 'pointer',
    padding: '7px 15px',
    borderRadius: 8,
    '&:hover': {
      backgroundColor: '#fdf4d1',
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
})

export default useStyles
