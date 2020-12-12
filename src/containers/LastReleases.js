import { connect } from 'react-redux'
import { fetchLastReleases } from '../actions/lastReleases'
import LastReleases from '../components/pages/LastReleases'

const mapStateToProps = (state) => {
  const { lastReleases } = state
  return lastReleases
}

const mapDispatchToProps = (dispatch) => ({
  fetchLastReleases: (offset = 0, limit = 20) => dispatch(fetchLastReleases({ offset, limit })),
})

export default connect(mapStateToProps, mapDispatchToProps)(LastReleases)
