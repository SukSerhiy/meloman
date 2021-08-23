import { connect } from 'react-redux'
import {
  fetchArtist,
  fetchTopTracks,
  fetchArtistAlbums,
  fetchRelatedArtists,
} from '../actions/artist'
import Artist from '../ui/pages/Artist'

const mapStateToProps = (state) => ({
  loading: state.artist.loading,
  artist: state.artist.data,
  topTracks: state.artist.topTracks,
  albums: state.artist.albums.items,
  relatedArtists: state.artist.relatedArtists,
})

const mapDispatchToProps = (dispatch) => ({
  fetchArtist: (id) => dispatch(fetchArtist(id)),
  fetchTopTracks: (id, market) => dispatch(fetchTopTracks(id, market)),
  fetchArtistAlbums: (id) => dispatch(fetchArtistAlbums(id)),
  fetchRelatedArtists: (id) => dispatch(fetchRelatedArtists(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Artist)
