import {
  dateFormatter,
  DATE_FORMAT,
  WEEKS_IN_MILLISECONDS,
  WEEKS_PER_YEAR,
} from './date';

describe('dateFormatter', () => {
  test('should format date correctly', () => {
    const date = new Date('2024-04-25');
    const formattedDate = dateFormatter(date);
    expect(formattedDate).toBe('2024-04-25');
  });
});

describe('constants', () => {
  test('dATE_FORMAT should be "YYYY-MM-DD"', () => {
    expect(DATE_FORMAT).toBe('YYYY-MM-DD');
  });

  test('wEEKS_IN_MILLISECONDS should be 7 days in milliseconds', () => {
    expect(WEEKS_IN_MILLISECONDS).toBe(7 * 24 * 60 * 60 * 1000);
  });

  test('wEEKS_PER_YEAR should be the number of weeks in a year', () => {
    expect(WEEKS_PER_YEAR).toBe(Math.floor(365 / 7));
  });
});
