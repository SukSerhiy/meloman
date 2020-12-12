import { connect } from 'react-redux'
import { fetchAlbums, clearAlbums } from '../actions/albums'
import Albums from '../components/pages/Albums'

const mapStateToProps = (state) => ({
  loading: state.albums.loading,
  data: state.albums.data,
})

const mapDispatchToProps = (dispatch) => ({
  fetchAlbums: (searchStr) => dispatch(fetchAlbums(searchStr)),
  clearAlbums: () => dispatch(clearAlbums()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Albums)
