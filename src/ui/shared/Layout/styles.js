import { HEADER_HEIGHT } from '../constants';

const styles = {
  app: {
    minHeight: `100vh`,
  },
  main: {
    position: 'relative',
    top: HEADER_HEIGHT,
    height: `calc(100vh - ${HEADER_HEIGHT}px)`
  }
}

export default styles
