import { notFound } from '@repo/intl-router';

import Page from './page';

jest.mock('@repo/intl-router', () => ({
  notFound: jest.fn(),
}));

describe('<Page />', () => {
  test('calls notFound function', () => {
    Page();
    expect(notFound).toHaveBeenCalled();
  });
});
