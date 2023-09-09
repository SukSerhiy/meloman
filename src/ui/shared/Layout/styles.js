import { HEADER_HEIGHT } from '../constants';

const styles = {
  app: {
    minHeight: `100vh`,
  },
  main: {
    position: 'relative',
    top: HEADER_HEIGHT,
    minHeight: `calc(100vh - ${HEADER_HEIGHT}px)`,
    height: `calc(100% - ${HEADER_HEIGHT}px)`,
    backgroundColor: '#eedbc2',
  }
}

export default styles
