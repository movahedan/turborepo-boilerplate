import { locales } from './locales';

describe('locales', () => {
  test('to be true', () => {
    expect(locales).toEqual(['en', 'nl']);
  });
});
