import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
  root: {
    padding: '40px 5% 40px',
    minHeight: '100%',
    position: 'relative',
    backgroundColor: '#eedbc2',
    backgroundSize: 'cover',
    backgroundBlendMode: 'screen',
  },
  avatar: {
    margin: '0 auto',
    [theme.breakpoints.up('md')]: {
      borderRadius: '50%',
      width: 640,
      height: 640,
    },
  },
  titleContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.up('md')]: {
      position: 'relative',
      bottom: 70
    },
  },
  title: {
    margin: 0,
    wordBreak: 'break-all',
    fontSize: '3em',
    padding: '10px 0px',
    position: 'relative',
    display: 'inline-block',
    wordBreak: 'normal',
    [theme.breakpoints.up('md')]: {
      marginLeft: 40,
      fontSize: '8m',
      borderRadius: '50%',
      backgroundImage: 'radial-gradient(ellipse at center, #0000008a 0, transparent 100%)',
      padding: '10px 100px',
      letterSpacing: 6,
      color: '#f7ecec',
    },
  },
}))
