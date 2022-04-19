import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  searchInput: {
    width: '100%',
    backgroundColor: '#ffff',
    boxShadow: '0 0 14px #ffff',
    borderRadius: 7,
    borderColor: '#ffff',
  },
}))

export default useStyles
