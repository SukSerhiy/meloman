import moment from 'moment';

export const getReleaseDate = (releaseDate, precision) => {
  let format = 'MMMM Do YYYY'
  if (precision === 'year') {
    format = 'YYYY'
  }
  console.log('---releaseDate', releaseDate)
  return moment(releaseDate, "YYYY-MM-DD").format(format);
}
