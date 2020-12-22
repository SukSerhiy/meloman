import { connect } from 'react-redux'
import {
  fetchArtist,
  fetchRelatedArtists,
} from '../actions/artist'
import RelatedArtists from '../components/pages/Artist/RelatedArtists'

const mapStateToProps = (state) => ({
  loading: state.artist.loading,
  artist: state.artist.data,
  relatedArtists: state.artist.relatedArtists,
})

const mapDispatchToProps = (dispatch) => ({
  fetchArtist: (id) => dispatch(fetchArtist(id)),
  fetchRelatedArtists: (id) => dispatch(fetchRelatedArtists(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(RelatedArtists)
