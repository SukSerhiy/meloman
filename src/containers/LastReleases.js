import { connect } from 'react-redux'
import { fetchLastReleases } from '../actions/lastReleases'
import LastReleases from '../components/LastReleases'

const mapStateToProps = state => {
  const { lastReleases } = state
  return lastReleases
}

const mapDispatchToProps = dispatch => {
  return {
    fetchLastReleases: () => dispatch(fetchLastReleases())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LastReleases)
