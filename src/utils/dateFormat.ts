export default function formatDate(date: Date): string {
  let mon: number | string = date.getMonth() + 1,
    day: number | string = date.getDate(),
    hrs: number | string = date.getHours(),
    min: number | string = date.getMinutes();
  const yer = date.getFullYear();

  if (mon < 10) mon = '0' + mon;
  if (day < 10) day = '0' + day;
  if (hrs < 10) hrs = '0' + hrs;
  if (min < 10) min = '0' + min;

  return `${day}/${mon}/${yer} às ${hrs}:${min}`
}