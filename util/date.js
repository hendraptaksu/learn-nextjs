/**
 * convert date from format '2022-01-01' to '01 January 2022'
 * @param {*} date
 */
export function getHumanReadableDate(date) {
  date.getDate();
  date.getFullYear();
  date.getMonth();
}
