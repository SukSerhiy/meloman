import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '20px 3%',
    [theme.breakpoints.up('lg')]: {
      padding: '30px 10%',
    },
  },
  container: {
    margin: '0 auto',
    display: 'flex',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
    },
  },
  albumBody: {
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.up('xs')]: {
      marginLeft: '1%',
    },
    [theme.breakpoints.down('xs')]: {
      alignItems: 'center',
    },
  },
  realiseDateContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  realiseDate: {
    padding: '10px 0px',
    fontWeight: 'bold'
  },
  calendarIcon: {
    marginRight: 10,
  },
  coverImg: {
    [theme.breakpoints.down('xs')]: {
      display: 'block',
      margin: '0 auto',
    },
  },
  albumName: {
    fontSize: 23,
    fontWeight: 'bold',
  },
  artistLink: {
    fontSize: 16,
    fontWeight: 'bold',
    textDecoration: 'none',
    color: '#483b03',
    lineHeight: 2,
    transition: 'color 0.3s ease 0s',
    '&:hover': {
      color: '#b18a42',
      textDecoration: 'underline',
    },
  },
}))

export default useStyles
