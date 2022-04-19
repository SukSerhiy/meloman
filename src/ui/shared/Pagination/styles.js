import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  paginationSection: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  pagination: {
    '& button': {
      fontSize: 20,
      fontWeight: 500,
    },
  },
}))

export default useStyles
