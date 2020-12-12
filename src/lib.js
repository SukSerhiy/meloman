export const getReleaseDate = (item) => (item.release_date
  && item.release_date_precision === 'year' ? item.release_date
  : item.release_date.slice(0, item.release_date.indexOf('-')))
