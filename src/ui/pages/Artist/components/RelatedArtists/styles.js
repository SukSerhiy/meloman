import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
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
}));

export default useStyles;
