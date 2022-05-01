import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  menuIconBtn: {
    transition: 'all 0.2s ease',
    '&:hover': {
      transform: 'scale(1.1)',
    },
  },
  menuIcon: {
    fontSize: '40px',
    color: '#fff',
  },
  menu: {
    position: 'absolute',
    opacity: 0,
    backgroundColor: '#565a8a',
    transition: 'all 0.3s ease',
    [theme.breakpoints.up('sm')]: {
      paddingTop: 20,
      left: '-400px',
      width: '400px',
      height: '100vh',
    },
    [theme.breakpoints.down('sm')]: {
      top: '-100%',
      width: '100%',
      left: 0,
      height: 'auto'
    },
    display: 'none'
  },
  menuActive: {
    display: 'block',
    opacity: 1,
    [theme.breakpoints.up('sm')]: {
      left: 0,
    },
    [theme.breakpoints.down('sm')]: {
      top: 85,
    },
  },
  item: {
    display: 'flex',
    alignItems: 'center',
    padding: '10px 20px',
  },
  link: {
    fontSize: '1.4em',
    color: '#fff',
    fontWeight: 700,
    textDecoration: 'none',
    letterSpacing: '1px',
    marginLeft: 10
  },
  activeLink: {
    color: 'yellow',
  },



  noPanel: {
    display: 'none',
  },
  activePanel: {
    display: 'block'
  }
}))

export default useStyles
