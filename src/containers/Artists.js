import { connect } from 'react-redux'
import { fetchArtists, clearArtists } from '../actions/artists'
import Artists from '../components/pages/Artists'

const mapStateToProps = (state) => ({
  loading: state.artists.loading,
  data: state.artists.data,
})

const mapDispatchToProps = (dispatch) => ({
  fetchArtists: (searchStr) => dispatch(fetchArtists(searchStr)),
  clearArtists: () => dispatch(clearArtists()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Artists)
