import { DURATION } from './constants';

export const styles = {
  root: {
    display: 'flex',
    alignItems: 'center',
    margin: '20px 0px',
  },
  playIcon: {
    width: 65,
  },
  iconButtonWrapper: {
    borderRadius: '100%',
  },
  content: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: '4px 0px',
  },
  titleBlock: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 10,
  },
  titleText: {
    fontSize: 22,
  },
  albumCover: {
    width: 40,
    marginRight: 10,
  },
  albumBlock: {
    display: 'inline-flex',
    flexDirection: 'column',
  },
  albumName: {
    fontSize: 16,
    textDecoration: 'none',
    color: '#483b03',
    fontWeight: 'bold',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  releaseDate: {
    fontSize: 12,
  },
  sliders: {
    display: 'flex',
    alignItems: 'center',
  },
  volumeBlock: {
    display: 'flex',
    alignItems: 'center',
    paddingRight: 10,
  },
  volumeSlider: {
    width: 0,
  },
  volumeImg: {
    height: 20,
  },
}

export const defaultStyle = {
  transition: `width ${DURATION}ms ease-in-out`,
  width: 0,
  opacity: 0,
}

export const transitionStyles = {
  entering: { width: 200, opacity: 1 },
  entered: { width: 200, opacity: 1 },
  exiting: { width: 0, opacity: 1 },
  exited: { width: 0, opacity: 0 },
}
