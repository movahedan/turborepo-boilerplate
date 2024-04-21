import * as nextNavigation from 'next/navigation';

import page from './page';

jest.mock('next/navigation', () => ({
  ...jest.requireActual('next/navigation'),
  redirect: jest.fn(),
}));

describe('<Page />', () => {
  test('should render successfully', () => {
    const spyRedirect = jest.spyOn(nextNavigation, 'redirect');

    page();

    expect(spyRedirect).toHaveBeenCalledWith('/en');
  });
});
