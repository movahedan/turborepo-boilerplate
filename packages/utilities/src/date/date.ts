export const DATE_FORMAT = 'YYYY-MM-DD';

export const WEEKS_IN_MILLISECONDS = 7 * 24 * 60 * 60 * 1000;
export const WEEKS_PER_YEAR = Math.floor(365 / 7);

export function dateFormatter(d: Date) {
  const year = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
  const month = new Intl.DateTimeFormat('en', {
    month: '2-digit',
  }).format(d);
  const day = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);

  return `${year}-${month}-${day}`;
}
