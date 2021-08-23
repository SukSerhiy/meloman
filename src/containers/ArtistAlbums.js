import { connect } from 'react-redux'
import {
  fetchArtist,
  fetchArtistAlbums,
} from '../actions/artist'
import Albums from '../ui/pages/Artist/Albums'

const mapStateToProps = (state) => ({
  loading: state.artist.loading,
  artist: state.artist.data,
  topTracks: state.artist.topTracks,
  albums: state.artist.albums,
  relatedArtists: state.artist.relatedArtists,
})

const mapDispatchToProps = (dispatch) => ({
  fetchArtist: (id) => dispatch(fetchArtist(id)),
  fetchArtistAlbums: (id, offset, limit) => dispatch(fetchArtistAlbums(id, offset, limit)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Albums)
