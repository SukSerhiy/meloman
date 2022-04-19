import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '10px 3%',
    [theme.breakpoints.up('lg')]: {
      padding: '10px 14%',
    },
  },
  grid: {
    display: 'grid',
    gridGap: '50px 10%',
    justifyItems: 'center',
    [theme.breakpoints.up('sm')]: {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
    [theme.breakpoints.up('lg')]: {
      gridTemplateColumns: 'repeat(3, 1fr)',
    },
  },
}))

export default useStyles
