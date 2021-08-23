export const getReleaseDate = (releaseDate, precision) => (
  releaseDate
    && precision === 'year' ? releaseDate
    : releaseDate.slice(0, releaseDate.indexOf('-')))
