import { connect } from 'react-redux'
import { fetchAlbum } from '../actions/album'
import Album from '../ui/pages/Album'

const mapStateToProps = (state) => ({
  loading: state.album.loading,
  album: state.album.data,
})

const mapDispatchToProps = (dispatch) => ({
  fetchAlbum: (id) => dispatch(fetchAlbum(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Album)
