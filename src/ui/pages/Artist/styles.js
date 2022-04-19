import { makeStyles } from '@material-ui/core/styles'

export default makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    padding: '0px 10%',
    minHeight: '100%',
    position: 'relative',
    backgroundBlendMode: 'lighten',
    backgroundSize: 'cover',
  },
  content: {
    zIndex: 1,
    flex: 1,
    backgroundImage: 'linear-gradient(90deg, transparent 0, #a9a9a9d6 1%, #a9a9a9d6 99%, transparent 100%)',
    padding: '0px 3%',
  },
  contentTitle: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    color: '#ffff',
    fontSize: 96,
    margin: 0,
    position: 'relative',
    bottom: 70,
    letterSpacing: 6,
    backgroundImage: 'radial-gradient(ellipse at center, #0000008a 0, transparent 70%, transparent 100%)',
  },
  topTracks: {
    overflow: 'hidden',
    maxHeight: 500,
    transition: 'all 0.3s ease-in-out 0.2s',
  },
  topTrackExpanded: {
    maxHeight: '400vh',
  },
  showAllBtn: {
    textTransform: 'capitalize',
    fontSize: 16,
    fontWeight: 700,
    margin: '10px 0px 0px',
  },
  relatedArtist: {
    borderRadius: '50%',
  },
  sliderItemImg: {
    height: 445,
  },
  sliderItemWrapper: {
    padding: 20,
  },
})
